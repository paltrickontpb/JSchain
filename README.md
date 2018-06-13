# JSchain
Blockchain built completely on Javascript, with PoW. Future plans include support for PoS and PoET

## Current Setup
Blockchain.js is the main file which defines all the main/core/global functions which can be called on by any blockchain instance. This will contain all the functions such as the PoW function and the others.

The PoW algorithm uses SHA256 as its hashing algorithm. At this current moment, SHA256 is highly secure, yet not as time consuming as SHA512, which is more secure, but each address will become longer and might take more time for data hashing. 

## Setup

1) Git clone the repo
2) npm install .
3) npm start

## Testing/Editing

Blockchain.js - For main blockchain related commands.  
Api.js - For expressJS based rest API.  

## TechStack/Libraries

SHA256  
ExpressJS  
Body-Parser  
PassportJS  

## Algorithms implemented

SHA256 based Proof Of Work

Future Plans for PoS, PoET, PoB, BFT etc
