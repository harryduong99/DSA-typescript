// We can solve this using a dynamic "sliding window" that 
// shrinks or grows whenever certain conditions are met

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1530310/o-n-javascript-typescript-with-detailed-explanatory-comments/
// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4093549/hashmap-with-sliding-window-solution-with-step-by-step-explanation/

const lengthOfLongestSubstring = function(characters: string) {
  // Setting to 0 takes care of the edge case where "characters" is ''
  let length = 0
  
  // Map will store each character and the last index they were looped over at
  let characterMap = new Map() // hash map
  
  // We declare a left index since a sliding window requires two indices
  // (left and right) to track the window of elements the indices surround
  let leftIndex = 0
  
  // Begin looping through each character in the string.
  // rightIndex will always be greater the leftIndex to create a "window" of elements
  for (let rightIndex = 0; rightIndex < characters.length; rightIndex++) {
      
      // Get current character for better readability
      const character = characters[rightIndex]
      
      // Check if character exists and if its last index is greater than the
      // current leftIndex. If we don't check it's leftIndex, we're setting
      // it to a previous result which'll provide incorrect values 
      // when calculating the window length
      if (characterMap.has(character) && characterMap.get(character) >= leftIndex) {
          // set left index to last index where the character was found plus one
          leftIndex = characterMap.get(character) + 1
      }
      
      // Which is greater, the last iteration's window length, or the current
      // interation's window length? We decide here, then set our result length
      // to that number. We add 1 since we need to take into account every element
      // within the window (2 - 0 = 2, although there are three elements, so add 1) 
      length = Math.max(length, rightIndex - leftIndex + 1)
          
      // Add character and its index to map, or, if it exists,
      // automatically overwrite its index with the current
      characterMap.set(character, rightIndex)
  }
  
  return length
};