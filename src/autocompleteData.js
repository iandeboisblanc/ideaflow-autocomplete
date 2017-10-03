// TODO: store data as trie, or at least use binary search for recall

const people = [
  'Kitty CatTown',
  'Petey Peculiar',
  'Petey Pet-culiar',
  'Maxine KittyPaws',
  'Mimi MeowMeow',
  'Max McFlufferton',
  'Doggie the Dogg',
  'Doug D. Donovan'
].sort();

const hashtags = [
  'feelingGood',
  'feelinGood',
  'felineGood',
  'dogStuff',
  'DougStuff',
  'dontAsk',
  'woof',
  'meow',
  'meeeowwww',
].sort();

const relations = [
  'pets.website - learn about pets',
  'pet stuff',
  'Animals? We know a thing or two about that!',
  'another thing about pets',
].sort();

const data = {
  people,
  hashtags,
  relations
};

function getAutocompleteOptions(type, string) {
  const source = data[type];
  const lowercaseString = string.toLowerCase();
  return source.filter((option) => {
    return option.toLowerCase().substring(0, string.length) === lowercaseString;
  });
}

module.exports = {
  getAutocompletePeople: getAutocompleteOptions.bind(null, 'people'),
  getAutocompleteHashtags: getAutocompleteOptions.bind(null, 'hashtags'),
  getAutocompleteRelations: getAutocompleteOptions.bind(null, 'relations'),
}
