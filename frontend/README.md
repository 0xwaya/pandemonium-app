
#ETHDenver 2023 Buidl-Week

Pandemonium (Screeching Macaws) NFT Collection

coded by Waya Labs Team:  @0xwaya, @cryptoweech


Technical Documentation:
    
    Setting up: 
        
        -  in an empty folder start a new npm project:

            ```
            npm init -y
            
            ```
        - install alchemyp-sdk
        
            ```
            npm install alchemy-sdk
            ```

- assuming you have vscode installed, import new project to vscode
```
code .
```

            
        
    
    1.- Create App API using https://dashboard.alchemy.com/
    * save your App API key 
    
    2.- Create dapp boiler plate using Alchemy SDK (link:https://createweb3dapp.alchemy.com)
    
     command line in terminal (VScode):
         ```
         npx create-web3-dapp@latest
        
         ```
         
         go thru the prompts and paste your alchemy app API KEY:
             
     ```
✔ Project name … eth-buidl-week
✔ Choose how to start: › Create default full-stack dapp
✔ Choose your chain › Ethereum
✔ Choose your network › Testnet
✔ [Optional] Choose your blockchain development environment: › Hardhat
✔ Do you want to create a smart contract? › Yes
✔ What kind of smart contract do you want to create? › ERC721
✔ Name for you contract … pandemonium
✔ Symbol for your contract … MACAW
✔ Smart contract features to implement › Pausable, Votes, Ownable, Roles, Auto Increment, Enumerable, URIStorage
✔ Are you done selecting contract features? … no / yes
✔ Do you already have an Alchemy account? … no / yes
✔ Insert your Alchemy API Key (Copy from https://auth.alchemy.com/?a=create-web3-dapp):  ->.. insert APP-key here ..<-
```

you should get this response:

```
[0/4] 🚀 Creating your dapp boilerplates
[1/4] 🗂 Setting up the directory...
[2/4] 💾 Dowloading project files...
[3/4] 📄 Creating the smart contract
[4/4] 🔧 Installing the dependencies - this might take a while, in the meantime:

📘 Visit the docs: https://docs.alchemy.com/docs/create-web3-dapp
🎨 Check out the components: https://createweb3dapp.alchemy.com/
```

         
3.- afer boilerplace app directory is created use:

command line in terminal (VScode):
```
cd your-app-folder 

npm run dev

```
client and server should be compiled succesfully and live in your local host
: http://localhost:3000!
```


4,- close the live server (control+C):

command line in terminal (VScode):
```
code .
```
this should open your-app-folders in VSCode!

then run server once again:

```
npm run dev
```
