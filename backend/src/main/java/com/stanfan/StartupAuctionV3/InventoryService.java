package com.stanfan.StartupAuctionV3;

import com.stanfan.StartupAuctionV3.model.MflPlayer;
import com.stanfan.StartupAuctionV3.model.Player;
import com.stanfan.StartupAuctionV3.model.PlayerDAO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class InventoryService {

    private final String mflUrl = "https://mfl-capn.herokuapp.com/Mfl/currentFreeAgents/2021";
    private PlayerDAO playerDAO;
    RestTemplate restTemplate = new RestTemplate();

    public void buildInventory() {
        MflPlayer[] freeAgents = null;
        try {
            freeAgents = getAllFreeAgents();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            enterFreeAgentInventory(freeAgents);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public MflPlayer[] getAllFreeAgents() {

        ResponseEntity<MflPlayer[]> response = restTemplate.getForEntity(mflUrl, MflPlayer[].class);
        MflPlayer[] playerInventory = response.getBody();
        System.out.println("Array created.");
        return playerInventory;
    }

    public void enterFreeAgentInventory(MflPlayer[] freeAgents) {
        List<Player> ourPlayers = new ArrayList<Player>();

        for (MflPlayer player : freeAgents) {
            String firstName = player.getName();
            String lastName = "x";
            int espnId = Integer.parseInt(player.getId());
            String position = player.getPosition();
            Player thisPlayer = new Player(espnId, firstName, lastName, position);
            if(!playerDAO.playerAlreadyListed(thisPlayer.getEspnId())) {
                thisPlayer = playerDAO.insertPlayer(thisPlayer);
                ourPlayers.add(thisPlayer);
            }
        }
    }
}
