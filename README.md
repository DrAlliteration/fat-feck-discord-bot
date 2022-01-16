# Fat Feck Discord Bot
A bot that sends you "Fat Feck" everyday.

The code is based on the private project https://github.com/c0nst4ntin/hsnr-discord-bad-jokes-bot

## Commands

    !fatfeck:subscribe
    ___________________________
    Subscribes you to the daily "Fat Feck"
    
    !fatfeck:unsubscribe
    ___________________________
    Unsubscribes you from the daily "Fat Feck"

    !fatfeck:sendmanually
    ___________________________
    Sends "Fat Feck" to every subscriber if it is used by the bot's 'owner'  
    (=> config.json -> OWNER_TAG)
    

## Local setup
Clone the repo:

    git clone https://github.com/DrAlliteration/Fat-Feck-Discord-Bot
    
Navigate to the project folder:

    cd Fat-Feck-Discord-Bot

Install all the packages and dependencies required for this project:

    npm install
    
Rename config.example.json to config.json and add config:

    cp config.example.json config.json

Tokens:

    BOT_TOKEN
    ____________
    The bot token generated at https://discord.com/developers/applications/

    OWNER_TAG
    ____________
    The discord-tag of the owner eg. DrAlliteration#1365
    
    PREFIX
    ____________
    The prefix of the command (default: !fatfeck:)
    
    TIME
    ____________
    Time of the day, when the daily Fat Feck should be send (Format: HH:MM, default: 12:00)


Start the Bot:

    npm run start