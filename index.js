import randomNumberGenerator from 'drand-random-number';

const MAX_NUMBERS = 50;
const MAX_STAR_NUMBERS = 12;

const MAX_NUMBER_SELECTION = 5;
const MAX_STAR_SELECTION = 2;

function _arrayRange(maxNumbers) {
	const numberArray = [...Array(maxNumbers + 1).keys()];
	numberArray.shift();

	return numberArray;
}

async function _getRandomNumbers(numberArray, length) {
	const selectedNumberArray = [];

	for (let i = 0; i < length; i++) {
		const random = await randomNumberGenerator();
		const randomPosition = Math.floor(random * numberArray.length);
		const randomNumber = numberArray[randomPosition];

		selectedNumberArray.push(randomNumber);
		numberArray.splice(randomPosition, 1);

		continue;
	}

	return selectedNumberArray;
}

const numbers = _arrayRange(MAX_NUMBERS);
const starNumbers = _arrayRange(MAX_STAR_NUMBERS);

const selectedNumbers = await _getRandomNumbers(numbers, MAX_NUMBER_SELECTION);
const selectedStar =  await _getRandomNumbers(starNumbers, MAX_STAR_SELECTION);

console.log('selectedNumbers', selectedNumbers);
console.log('selectedStar', selectedStar);

process.exit();
