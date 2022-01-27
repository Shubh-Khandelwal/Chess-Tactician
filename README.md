# Chess-Tactician

### Description
---
Chess Tactician is a browser based extension that allows real time in game board capture for popular online chess sites such as Lichess.org and Chess.com. 

Chess Tactician aims to provide online chess players with a better in-game opening planning experience, allowing players to pre-plan moves according to their own unique opening repertoire and displaying them synchronously throughout online chess games.

### Inspiration
---
Since the emergence of online chess sites in the early 2010s as well as an ongoing popularization of the game style mainly thanks to the streaming and show production industries, chrome extensions have become more and more prevalent in enhancing personal game experience. 

Unfortunately, the majority of such extensions have been posed to compute optimal piece movement, via already mature chess engine technology. Online chess sites have long recieved complaints about tool assisted cheating, and have taken server side measures in response. Such responses include running cheating-detection algorithms, taking in player elo, game style and move quality to accurating predict player behavior.

This cat-and-mouse scene in online chess has brought many questions to the surface, the most jarring and obvious being: How exactly should the functionalities of browser extensions in online chess be reasonably applied to improve player experience?

Having played online chess on and off for almost a decade, I immediately thought of the bottleneck issues I was facing as an intermediate chess player.

See, online chess, though featuring the same rules and settings, has its small but substantial differences with the base game played in person:

1. Online chess games are usually much shorter. Since games are not hosted in person, players can easily leave at anytime with reduced penalty. Blitz games between 3 and 10 minutes have been shown to be the most common time limits for online chess, compared to the usual 15 minute rapid game and the 45 minute standard format. This means players tend to be more focused, but typically with a reduced attention span.
2. Reduced reaction time. The reduced reaction time mentioned here refers to both the time the player takes to think, partially as a result of the first phenomenon, as well as the time a move a actually played and registered client side. This helps players focus more on strategizing, relieving some unwanted burden on time, such as potentially tipping over pieces while moving them. However, this also gives tool-assisted cheating more time to react.

Back to the daily struggles of a amateur player. As one gradually familiarizes with opening traps, common mating patterns as well as key endgame positions, a lot of the fun is drained from online chess. Games start off with popular variations of popular openings, slowly slide into the middle game and are decided early before the end game, usually by resignation.

What can we do to improve this "meta"? Well, thinking back to the joys of a beginner, opening traps and early game gambits are definitely a catlyst for excitement. However, such gambits are avoided when the playerbase starts to learn the direct counters. According to engine based move valuation, most gambits and "wild variations" usually yield subpar results compared to the main lines, which either involve early simplification (trading of pieces into the end game) or long positional closed games.

