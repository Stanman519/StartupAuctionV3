package com.stanfan.StartupAuctionV3.model.jdbc;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import com.stanfan.StartupAuctionV3.model.Bid;
import com.stanfan.StartupAuctionV3.model.NotAWinnerException;
import com.stanfan.StartupAuctionV3.model.Player;
import com.stanfan.StartupAuctionV3.model.PlayerDAO;



@Service
public class JDBCPlayerDAO implements PlayerDAO {

	private JdbcTemplate jdbcTemplate;

	public JDBCPlayerDAO(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}
	@Override
	public List<Player> getAllPlayers(){
		List<Player> allPlayers = new ArrayList<Player>();
		String sqlGetPlayers = "SELECT playerId, firstName, lastName, position FROM player ";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetPlayers);
		while(results.next()) {
			Player p = new Player();
			p.setPlayerId(results.getInt("playerId"));
			p.setFirstName(results.getString("firstName"));
			p.setLastName(results.getString("lastName"));
			p.setPosition(results.getString("position"));
			allPlayers.add(p);
		}
		return allPlayers;
	}
	@Override
	public Player getPlayerById(int id) {
		Player p = new Player();
		String getPlayer = "SELECT * FROM player WHERE playerid = ?";
		SqlRowSet result = jdbcTemplate.queryForRowSet(getPlayer, id);
		while(result.next()) {
		p = mapRowToPlayer(result);
		}
		return p;
	}
	
	@Override
	public Player insertPlayer(Player insertMe) {
		String sqlInsertPlayer = "INSERT INTO player (playerId, espnId, firstName, lastName, position) " +
								 "VALUES (?, ?, ?, ?, ?)";
		insertMe.setPlayerId(getNextPlayerId());
		jdbcTemplate.update(sqlInsertPlayer, insertMe.getPlayerId(), insertMe.getEspnId(), insertMe.getFirstName(), insertMe.getLastName(), insertMe.getPosition());
		return insertMe;
	}
	
	public boolean playerAlreadyListed(int id) {
		boolean exists = false;
		String sqlCheckForPlayer = "SELECT count(*) FROM player WHERE espnId = ?";
		int count = jdbcTemplate.queryForObject(sqlCheckForPlayer, new Object[] {id}, Integer.class);
		exists = count > 0;
		return exists;
	}
	@Override
	public List<Player> getAllPlayersOnTeam(String ownerName){
		List<Player> playersOnTeam = new ArrayList<Player>();
		String sqlPlayersOnTeam = "SELECT playerId, espnId, ownerId, firstname, lastname, position, salary, length, contractvalue, ownername " +
								  "FROM player " +
								  "WHERE ownername = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlPlayersOnTeam, ownerName);
		while(results.next()) {
			Player player = mapRowToPlayer(results);
			playersOnTeam.add(player);
		}
		return playersOnTeam;
	}
	@Override
	public void addOwnerToPlayer(int playerId, int ownerId) {
		String sqlSetOwner = "UPDATE player SET ownerId = ? WHERE playerId = ?";
		jdbcTemplate.update(sqlSetOwner, ownerId, playerId);
	}
	@Override
	public void addInfoAfterWin(Bid bid) throws NotAWinnerException {
		int newSalary = bid.getBidSalary();
		int newLength = bid.getBidLength();
		int contractValue = (newLength * 5) + newSalary;
		int latestBid = 0;
		String sqlCheckLatestBid = "select bidid from Bidledger where playerid = ? ORDER BY bidid desc limit 1";
		SqlRowSet result = jdbcTemplate.queryForRowSet(sqlCheckLatestBid, bid.getPlayerId());
		while (result.next()) {
			if (result.getInt("bidid") > bid.getBidId()) {
				throw new NotAWinnerException();
			}
		}
		String sqlCheckIfOwned = "select salary from player where playerid = ?";
		SqlRowSet ownerResult = jdbcTemplate.queryForRowSet(sqlCheckIfOwned, bid.getPlayerId());
		while (ownerResult.next()) {
			if(ownerResult.getInt("salary") > 0) {
				throw new NotAWinnerException();
			}
		}
		
		int playerId = bid.getPlayerId();
		String ownername = bid.getBidder();
		String sqlPlayerUpdate = "UPDATE player SET ownername = ?, salary = ?, length = ?, contractvalue = ? WHERE playerid = ?";
		jdbcTemplate.update(sqlPlayerUpdate, ownername, newSalary, newLength, contractValue, playerId);
	}
	@Override
	public List<Player> getAvailablePlayersAtPosition(String position){
		List<Player> availableByPosition = new ArrayList<Player>();
		String sqlGetPlayers = "SELECT playerId, firstName, lastName, position FROM player WHERE position = ? AND ownerId IS NULL ORDER BY lastName;";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetPlayers, position);
		while(results.next()) {
			Player p = new Player();
			p.setPlayerId(results.getInt("playerId"));
			p.setFirstName(results.getString("firstName"));
			p.setLastName(results.getString("lastName"));
			p.setPosition(results.getString("position"));
			
			availableByPosition.add(p);
		}
		return availableByPosition;
	}
	@Override
	public List<Player> getAllDraftedPlayers(){
		List<Player> playersOnTeams = new ArrayList<Player>();
		String sqlPlayersOnTeam = "SELECT playerId, espnId, ownerId, firstname, lastname, position, salary, length, contractvalue, ownername " +
								  "FROM player " +
								  "WHERE ownername IS NOT NULL";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlPlayersOnTeam);
		while(results.next()) {
			Player player = mapRowToPlayer(results);
			playersOnTeams.add(player);
		}
		return playersOnTeams;
	}
	
	public Player mapRowToPlayer(SqlRowSet rs) {
		Player p = new Player();
		p.setPlayerId(rs.getInt("playerid"));
		p.setEspnId(rs.getInt("espnid"));
		p.setOwnerId(rs.getInt("ownerid"));
		p.setFirstName(rs.getString("firstname"));
		p.setLastName(rs.getString("lastname"));
		p.setPosition(rs.getString("position"));
		p.setSalary(rs.getInt("salary"));
		p.setLength(rs.getInt("length"));
		p.setContractValue(rs.getInt("contractvalue"));
		p.setOwnerName(rs.getString("ownername"));
		return p;
		
	}
	
	
	private int getNextPlayerId() {
		SqlRowSet nextId = jdbcTemplate.queryForRowSet("SELECT nextval('player_playerid_seq')");
		if(nextId.next()) {
			return nextId.getInt(1);
		} else {
			throw new RuntimeException("Error.  Unable to save your reservation. Please try again later.");
		}
	}
}
