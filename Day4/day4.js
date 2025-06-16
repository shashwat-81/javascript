function checkAnagram() {
        let word1 = document.getElementById("inputString1").value;
        let word2 = document.getElementById("inputString2").value;

        if (!word1 || !word2) {
            alert("Please enter both strings");
            return;
        }

        word1 = word1.toLowerCase().trim();
        word2 = word2.toLowerCase().trim();

        word1 = word1.split('').sort().join('');
        word2 = word2.split('').sort().join('');

        
        if (word1 === word2) {
            alert("The strings are anagrams.");
        } else {
            alert("The strings are not anagrams.");
        }

    }