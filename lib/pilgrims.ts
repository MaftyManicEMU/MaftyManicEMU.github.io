export type Pilgrim = {
  id: string;
  name: string;
  number: string;
  aspect: string;
  image: string;
  description: string;
};

export const pilgrims: readonly Pilgrim[] = [
  {
    id: 'frost',
    name: 'Frost',
    number: 'I',
    aspect: 'Stillness & preservation',
    image: '/assets/pilgrim-frost.png',
    description:
      'Frost moves through the northern heights, its passage marked at the White Stair by bells, ledgers, ice, and the careful work of those who live below the glacier. It is the Pilgrim of stillness, preservation, and conditions held in place: a force people have learned to borrow for bridges, granaries, gates, and winter roads. Mountain communities respect Frost not as mercy or punishment, but as a season that rewards preparation—and reminds every generation that nothing can be kept unchanged forever.',
  },
  {
    id: 'bloom',
    name: 'Bloom',
    number: 'II',
    aspect: 'Growth & renewal',
    image: '/assets/pilgrim-bloom-v3.png',
    description:
      'Bloom travels the living roads beneath field, orchard, and garden. Its Wake is read in waking roots, loosening buds, drifting pollen, and the green pressure that turns planted ground toward growth. Farmers time their sowing to its passage, while orchard keepers and road custodians leave room for what follows. Bloom is often painted as gentle, but the books treat growth as powerful and impartial: life seeks light, soil, and passage without caring whether a human wall stands in the way.',
  },
  {
    id: 'heat',
    name: 'Heat',
    number: 'III',
    aspect: 'Warmth & pressure',
    image: '/assets/pilgrim-heat.png',
    description:
      'Heat crosses the western vales in a season of glare, hot wind, and rapidly falling water. Its road gathers in sun-struck stone, public grain-drying floors, foundries, and every reservoir losing depth to the sky. Canal crews, farmers, metalworkers, and city households watch its timing as closely as any calendar. Heat is more than summer weather: it is a vast seasonal pressure moving through the world, useful in work and harvest yet unforgiving when people assume the old measures will always hold.',
  },
  {
    id: 'gale',
    name: 'Gale',
    number: 'IV',
    aspect: 'Motion & passage',
    image: '/assets/pilgrim-gale.png',
    description:
      'Gale is the most elusive of the six Pilgrims, known through what it carries rather than what it leaves behind. Its road appears in changing pressure, smoke that turns against a chimney, sails drawing taut, migrating birds, and seed or pollen borne far beyond expectation. Couriers, sailors, millers, and city wardens learn to read its signs in cloth, breath, and moving air. Gale gives motion to the world, but no border, tower, or official map can fully contain its passage.',
  },
  {
    id: 'rain',
    name: 'Rain',
    number: 'V',
    aspect: 'Water & storm',
    image: '/assets/pilgrim-rain.png',
    description:
      'Rain comes as three immense rings of blue-black stone revolving around a hollow center, with water falling inward and lightning wandering through the dark. Storms follow its Wake across the old road, feeding rivers, wells, canals, and fields far beyond any single kingdom. To the people of The Broken Year, Rain is abundance, danger, memory, and shared dependence made visible. Its passage has shaped law, worship, engineering, and everyday ritual wherever a household waits for the first sound of water.',
  },
  {
    id: 'harvest',
    name: 'Harvest',
    number: 'VI',
    aspect: 'Ripening & rest',
    image: '/assets/pilgrim-harvest.png',
    description:
      'Harvest walks the amber road between growth and gathering. Its passage is recognized in ripening heads, loosening husks, viable seed, and the change that allows a living field to become food for the winter ahead. Farmers, reapers, granary keepers, bakers, and rulers build their calendars around it, preparing scales, storehouses, songs, and seed bins before the first fields turn. Harvest represents readiness, consequence, and rest—the patient turning by which one season closes and another is allowed to begin.',
  },
];
