let noun1 = prompt('Enter an noun:')
let winterHoliday = prompt('Enter a winter holiday:')
let adjective1 = prompt('Enter an adjective:')
let pluralNoun1 = prompt('Enter a plural noun:')
let verb = prompt('Enter an verb:')
let noun2 = prompt('Enter an noun:')
let holidayBeverage = prompt('Enter a holiday beverage:')
let adverb = prompt('Enter an adverb:')
let song = prompt('Enter a song:')

noun1 = `<span> ${noun1}</span>`
winterHoliday = `<span> ${winterHoliday}</span>`
adjective1 = `<span> ${adjective1}</span>`
pluralNoun1 = `<span> ${pluralNoun1}</span>`
verb = `<span> ${verb}</span>`
noun2 = `<span> ${noun2}</span>`
holidayBeverage = `<span> ${holidayBeverage}</span>`
adverb = `<span> ${adverb}</span>`
song = `<span> ${song}</span>`

let paragraph1 = `In the whimsical land of Whoville, the infamous Grinch lived atop Mount ${noun1}, plotting and scheming to ruin every ${winterHoliday} celebration. The Grinch, with his ${adjective1} green fur and a heart "two sizes too small," despised the holiday cheer that echoed through the valley. One fateful day, he concocted a devious plan to steal all the ${pluralNoun1} from the unsuspecting Whos below.`

let paragraph2 = `Armed with a sack and a sinister grin, the Grinch ${verb} down the mountain and into the heart of Whoville under the cover of ${noun2}. He swiped everything in sight, from the festive decorations to the last can of ${holidayBeverage}. The Grinch thought he had succeeded in stealing the very essence of the holiday, imagining the disappointed faces of the Whos waking up to a Christmas-less morning.`

let paragraph3 = `But as the Grinch stood on the mountaintop, reveling in his triumph, he was met with an unexpected sight. The Whos of Whoville, undeterred by the absence of their belongings, joined hands and began to ${adverb} sing the song "${song}." The Grinch, perplexed by this display of resilience, felt a peculiar sensation in his heart. It started to grow, breaking the icy grip that had held it captive for so long. In that magical moment, the Grinch discovered the true meaning of ${winterHoliday} and, much to his surprise, found himself transformed into a kinder, more compassionate creature. And from that day forward, the Grinch became an honorary Who, celebrating the holidays with genuine warmth and newfound holiday spirit.`



let story = `<p>${paragraph1}</p><br><p>${paragraph2}</p><br><p>${paragraph3}</p>`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<div class = "story">${story}<div>`