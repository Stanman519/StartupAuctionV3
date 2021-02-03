package com.stanfan.StartupAuctionV3.model;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface PlayerDAO {

	public Player insertPlayer(Player insertMe);
	public boolean playerAlreadyListed(int id);

	public List<Player> getAllPlayersOnTeam(String ownerId);
	public void addOwnerToPlayer(int playerId, int ownerId);
	public List<Player> getAvailablePlayersAtPosition(String position);
	public List<Player> getAllPlayers();
	public Player getPlayerById(int id);
	public void addInfoAfterWin(Bid bid);

	public List<Player> getAllDraftedPlayers();
}
