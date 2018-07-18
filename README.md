# Emotion Commotion

Live at https://cloppenheimer.github.io/emotionCommotion/

This project is a game that uses the Affectiva API. The game exemplifies the Stroop Effect,
which is a demonstration of interference in the reaction time of a task. When the name of
a color is written in  a different color (for example, the word "pink" printed in
green instead of in pink), naming the color of the word takes longer and is more 
prone to errors than when the color of the ink matches the name of the color. Instead of
using colors, we uses pictures of people expressing various emotions. We also 
write the name of an emotion directly above or below the picture. The player of the 
game has 5 seconds to express the emotion written in text, not the emotion displayed 
in the picture. The player earns 10 points for each correct match. A correct match occurs 
when the player expresses the emotion, which we define as being above 70 in the emotional
response data for that specific emotion from the Affectiva API. The game ends when the 
player fails to match the emotion 10 times. When the player reaches a score of 60, they
level up and only have 3 seconds to make the correct emotion, instead of 5. 

Created with Tanya Sinha
