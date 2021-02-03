package com.stanfan.StartupAuctionV3;

import com.stanfan.StartupAuctionV3.model.MflPlayer;
import com.stanfan.StartupAuctionV3.model.Player;
import com.stanfan.StartupAuctionV3.model.PlayerDAO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class InventoryService {

    private final String mflUrl = "https://ryan-passion-project.apps.vn01.pcf.dcsg.com/Mfl/currentFreeAgents/2020";
    private PlayerDAO playerDAO;
    RestTemplate restTemplate = new RestTemplate();

    public void buildInventory() {
        MflPlayer[] freeAgents = null;
        try {
            freeAgents = getAllFreeAgents();
        } catch (Exception e) {
            e.printStackTrace();
        }
        List<Player> uselessCode = enterFreeAgentInventory(freeAgents);
    }
    public MflPlayer[] getAllFreeAgents() {
        ResponseEntity<MflPlayer[]> response = restTemplate.getForEntity(mflUrl, MflPlayer[].class);
        MflPlayer[] playerInventory = response.getBody();
        return playerInventory;
    }

    public List<Player> enterFreeAgentInventory(MflPlayer[] freeAgents) {
        List<Player> ourPlayers = new ArrayList<Player>();

        for (MflPlayer player : freeAgents) {

            String firstName = player.getName();
            String lastName = "";
            int espnId = Integer.parseInt(player.getId());
            String position = player.getPosition();
            Player thisPlayer = new Player(espnId, firstName, lastName, position);
            if(!playerDAO.playerAlreadyListed(thisPlayer.getEspnId())) {
                thisPlayer = playerDAO.insertPlayer(thisPlayer);
                System.out.println("made a player..." + thisPlayer.getFirstName() + " " + thisPlayer.getLastName() + " " + thisPlayer.getPosition());
                ourPlayers.add(thisPlayer);
            }
        }
        System.out.println("done building inventory.");
        return ourPlayers;
    }
}
