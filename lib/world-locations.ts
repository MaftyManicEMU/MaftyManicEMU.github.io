export type WorldLocation = {
  id: string;
  name: string;
  labelLines: readonly string[];
  category: string;
  x: number;
  y: number;
  width: number;
  height: number;
  labelSize?: 'small' | 'standard' | 'major';
  place: string;
  people: string;
  sources: string;
};

export type PilgrimMapLink = {
  id: string;
  name: string;
  labelLines: readonly string[];
  x: number;
  y: number;
  width: number;
  height: number;
};

export const worldLocations: readonly WorldLocation[] = [
  {
    id: 'white-stair',
    name: 'White Stair',
    labelLines: ['White Stair'],
    category: 'Northern landmark',
    x: 31.4,
    y: 0.8,
    width: 15.3,
    height: 2.8,
    place:
      'At the northern edge of the mapped world, the White Stair is both an inhabited mountain pass and a monastery complex set against a glacier. More than a thousand cut steps rise from the lower bell toward ice arches and steps worked directly into the glacier. White towers, refuge houses, high cisterns, drains, and storehouses make the place a piece of living infrastructure as much as a religious site. Its blue ledger preserves nine centuries of frost lines, bell sequences, weather, and material change, allowing each generation to compare the mountain before deciding what it means.',
    people:
      'Monks and recorders share the pass with shepherds, engineers, custodians, couriers, roof crews, and families who live beneath the towers. Their culture prizes exact observation: steps are counted, knots and seals are recorded, anomalies are read aloud, and claims are kept narrower than the evidence. Seasonal bells coordinate distant monasteries, while practical labor—moving stores, clearing drains, and repairing refuge roofs—sits comfortably beside ritual.',
    sources: 'The Chained Rain · The Hollow Season · The Last Godroad',
  },
  {
    id: 'meren-reservoir',
    name: 'Meren Reservoir',
    labelLines: ['Meren', 'Reservoir'],
    category: 'Northern waterwork',
    x: 2.7,
    y: 12.3,
    width: 12,
    height: 4.1,
    place:
      'Meren Reservoir lies north of the Crown Basin where the river divides around a ridge of white stone. Its principal features include a Frost-held seal, an eastern retaining stair, a deep inlet, and a wall whose safe operation depends on carefully observed water levels. The reserve belongs to a larger northern network of cisterns and headwaters that helps supply the grain wards. In the books, Meren is seen mainly through engineering and allocation records, so its significance is structural: it is one of the quiet places where mountain water, seasonal workings, and distant food security meet.',
    people:
      'The novels do not yet give Meren a street-level culture. The supported picture is an infrastructure community of reservoir keepers, repair crews, Frost observers, survey clerks, cistern workers, and grain-ward carriers. Their rhythms are set by inspection lines, draw limits, seasonal releases, and the responsibility of keeping northern water usable far beyond the reservoir itself.',
    sources: 'The Chained Rain',
  },
  {
    id: 'northern-range',
    name: 'Northern Range',
    labelLines: ['Northern Range'],
    category: 'Mountain region',
    x: 46.2,
    y: 16,
    width: 21.4,
    height: 2.8,
    place:
      'The Northern Range stretches across the high country traversed by Frost after the rime reaches the White Stair’s monastery roof. Snowfields, headwaters, pasture routes, cisterns, and remote religious houses define the region more clearly than political borders. Six monastery bells can answer across the mountains, creating an acoustic chain through cloud and distance; their order forms a shared seasonal record. The range is therefore both a landscape and an observing network, where small local signs—ice on a step, a bell out of sequence, animals moving south—can reveal a change broader than any single valley.',
    people:
      'Monks, ledger keepers, shepherds, cistern crews, couriers, and people in isolated pass settlements make up the clearest northern communities. Seasonal knowledge is communal and practical: shepherds move animals when the rime reaches its mark, monasteries compare records, and bells carry observations across terrain that paper cannot cross quickly. Their culture values memory, caution, and evidence tested against place.',
    sources: 'The Chained Rain',
  },
  {
    id: 'upper-vales',
    name: 'Upper Vales',
    labelLines: ['Upper Vales'],
    category: 'Western uplands',
    x: 12.9,
    y: 25.6,
    width: 14.6,
    height: 2.8,
    place:
      'The Upper Vales occupy the western uplands between the reservoir country and the northern approaches. The canonical books mention them briefly, chiefly as a corridor followed by Heat and linked to the waterworks at Three Reeds, Crowglass, and Meren. That limited view is still revealing: what happens in the Vales is measured downstream, suggesting a landscape whose slopes, catchments, and seasonal passages matter to regions well beyond it. No town, ruler, vegetation, or exact boundary is yet described, so the atlas preserves the Vales as partly unknown rather than filling them with invented detail.',
    people:
      'No distinct Upper Vales people or custom has yet been established in the novels. The safest supported portrait is functional: upland households, seasonal observers, herders, road crews, and reservoir workers would be the communities most directly tied to this corridor. That occupational picture is an inference from the Vales’ geography and neighboring systems, not a fully described canon culture.',
    sources: 'The Chained Rain',
  },
  {
    id: 'three-reeds',
    name: 'Three Reeds',
    labelLines: ['Three Reeds'],
    category: 'Western waterwork',
    x: 1.4,
    y: 34.1,
    width: 11.8,
    height: 2.8,
    place:
      'Three Reeds is a western reservoir and branching waterwork positioned west of the Crown Basin. Its lined channels can divide household flow, with a southern branch capable of carrying water independently, and the system is important enough that northern granary towns appear in the same planning tables. The books present Three Reeds as engineered country rather than scenic backdrop: foundations, branches, repair schedules, and downstream obligations define the place. Its design shows how the Crown’s water network depends on redundancy—one branch may keep daily life moving while another part of the works is inspected or repaired.',
    people:
      'Three Reeds is represented through the people needed to operate a divided reservoir: menders, gatekeepers, gauge readers, household registrars, cistern crews, and workers connected to granary supply. Their local customs are not separately described. What is clear is a culture of scheduled maintenance and measured sharing, where a technical decision at one branch can affect kitchens and grain stores many miles away.',
    sources: 'The Chained Rain',
  },
  {
    id: 'kesh',
    name: 'Kesh',
    labelLines: ['Kesh'],
    category: 'Eastern country',
    x: 87.7,
    y: 35.9,
    width: 9.2,
    height: 2.9,
    labelSize: 'major',
    place:
      'Kesh begins east of Rill Pass and extends through irrigated roads, granary country, and the Amber Plain to its capital at Namar. It is a sovereign country with its own courts, engineers, household records, receiving works, and four banner commands, while its access to western water is governed through treaty machinery. Kesh landscapes join red cliffs and mineral wells to black-roofed towns, farm roads, public stores, and old hydraulic structures kept in use for generations. The books present it neither as a monolith nor an exotic edge, but as a country where local authority, family obligation, and material survival are constantly negotiated in public.',
    people:
      'Kesh life is organized around households, farming, granaries, engineering, courts, and councils that expect records to answer local conditions. Children fold paper birds at festivals and launch them from red cliffs; different creases can signal weather, family, danger, or jokes. Patterned carpets, salt-glass lamps, bitter mineral water, formal courtesy, signal drums, and shared grain measures give the culture a tactile, highly legible character.',
    sources: 'The Chained Rain · The Hollow Season · The Last Godroad',
  },
  {
    id: 'crown-basin',
    name: 'Crown Basin',
    labelLines: ['Crown', 'Basin'],
    category: 'Central hydraulic region',
    x: 26.4,
    y: 40.8,
    width: 9.4,
    height: 4.3,
    place:
      'At the hydraulic center of the western system, the Crown Basin surrounds an ancient Well whose lowest stones predate the institutions built above it. The great Receiving Ground descends in circular terraces, spillways, and reservoirs, while six river-wide canals radiate toward older roads and distant countries. Aqueducts carry water across the Basin, and signal fires on their heights can relay news from its outer works. The landscape is therefore partly natural watershed, partly monumental construction: a vast civic machine layered over older foundations, designed to gather, measure, store, and distribute water on a continental scale.',
    people:
      'The Basin supports farmers, stonecutters, surveyors, canal crews, aqueduct keepers, cistern workers, carters, clerks, soldiers, and provincial delegates. Its culture treats water as both daily necessity and public administration: flows become ledgers, gates, hearings, work schedules, and household measures. Skilled labor carries prestige, but decisions made at the center are always felt by people living at the far ends of its channels.',
    sources: 'The Chained Rain · The Hollow Season · The Last Godroad',
  },
  {
    id: 'salt-marches',
    name: 'Salt Marches',
    labelLines: ['Salt', 'Marches'],
    category: 'Eastern drylands',
    x: 55.9,
    y: 46.1,
    width: 12.7,
    height: 4.7,
    place:
      'The Salt Marches spread east of the Crown’s watered lands in a glare of red earth and white mineral flats. Dry lake beds shine like broken mirrors, thorn trees stand nearly leafless, low copper hills fold toward Rill Pass, and columns of salt dust move across the plain. The Eastreach cuts through this country in stone, tying scattered towns and farms to scheduled water. High summer arrives without gentleness, and the visible landscape is shaped as much by absence as abundance: dry channels, public cisterns, pale road dust, measure markers, and brief strips of green where water has been persuaded to remain.',
    people:
      'March communities include canal menders, farmers, herders, potters, household registrars, gate crews, elders, and families living beyond official markers. Waterdays structure public life. Households gather under awnings with jars and clay tally tokens, and doors carry water marks renewed over time. The culture is practical, skeptical of distant paperwork, and attentive to reuse, repair, seed plots, and the fairness of every measured share.',
    sources: 'The Chained Rain · The Hollow Season',
  },
  {
    id: 'crowglass',
    name: 'Crowglass',
    labelLines: ['Crowglass'],
    category: 'Western waterwork',
    x: 1.2,
    y: 45.8,
    width: 11.6,
    height: 2.8,
    place:
      'Crowglass is a western reserve near Three Reeds and west of the Crown Basin. Its defining feature in the books is not a palace or settlement but stored depth: the reservoir appears in allocation maps because its volume helps balance a much larger system. Crowglass is exposed to Heat strongly enough that evaporation is treated as an irreversible loss—stone can be repaired, but vanished water cannot. That fact gives the place its character: an open, climate-sensitive reserve whose condition matters far beyond its banks, linking western weather to city cisterns, farms, and the timing of releases elsewhere.',
    people:
      'The novels name no Crowglass resident and describe no distinct civic tradition. Its supported human world is therefore occupational: reservoir keepers, gauge crews, weather observers, maintenance teams, carters, and downstream households whose measures depend on the reserve. Any richer claim about clothing, festivals, government, or ancestry would go beyond the current canon.',
    sources: 'The Chained Rain',
  },
  {
    id: 'rill-pass',
    name: 'Rill Pass',
    labelLines: ['Rill Pass'],
    category: 'Border passage',
    x: 88.1,
    y: 49.1,
    width: 8.6,
    height: 2.8,
    labelSize: 'small',
    place:
      'Rill Pass is the mountain threshold between the Salt Marches and Kesh, shown on official maps as a clean black cut between two ridges. The lived pass is more complicated: soldiers acknowledge three routes, smugglers price six, old Kesh surveys record eleven, and only two will take a wagon. Wells, arches, checkpoints, signal posts, grain stores, shelter desks, and military roads crowd the crossing. Because water, relief cargo, travelers, armies, and treaties all converge here, Rill Pass is never merely a border line; it is a layered passage whose geography keeps outlasting every government’s simplified map.',
    people:
      'Garrison troops and banner guards share the pass with checkpoint clerks, ration workers, well keepers, carters, relief crews, traders, refugees, smugglers, and ordinary travelers. Passage is recorded through seals, consignees, inventories, and day books, but practical hospitality matters too: water is offered before names are taken, shelter claims are revisited without armed ears, and signals move by drum, bell, and cloth.',
    sources: 'The Chained Rain · The Hollow Season',
  },
  {
    id: 'ilvaren',
    name: 'Ilvaren',
    labelLines: ['Ilvaren'],
    category: 'Crown capital',
    x: 33.5,
    y: 49.9,
    width: 10.6,
    height: 2.8,
    place:
      'Ilvaren rises in white terraces around the Receiving Ground and the ancient Well. Six avenues climb toward the center beneath aqueducts and pale water towers; layered streets, ramps for jar carts, covered channels, markets, bridges, and drains occupy nearly every level. From the lower wards, the River Palace seems close, though the ascent can take hours. The city’s rings turn inward, and even later buildings press against old spillways and hydraulic foundations. Greenery is carefully trained rather than abundant, while dry fountains become market stalls, workshops, or shrines—evidence of a capital constantly adapting ceremonial architecture to ordinary need.',
    people:
      'Ilvaren holds palace households, Church offices, Water Office clerks, engineers, porters, market traders, craftspeople, petitioners, guards, and crowded lower-ward families. Its residents are not casually wasteful: shopkeepers catch condensation, washing water is reused for trees, and cistern queues shape neighborhood life. The culture is formal and record-heavy, yet highly inventive at street level, where civic monuments become cobblers’ stalls and empty cups become offerings.',
    sources: 'The Chained Rain · The Hollow Season · The Last Godroad',
  },
  {
    id: 'brackwater',
    name: 'Brackwater — Gate Forty-Seven',
    labelLines: ['Brackwater', '(Gate Forty-Seven)'],
    category: 'Salt March canal town',
    x: 69.4,
    y: 51.1,
    width: 13.1,
    height: 3.2,
    labelSize: 'small',
    place:
      'Brackwater is a red mud-brick canal town in the Salt Marches, built where the Eastreach crosses a gully on six stone arches and divides into three farm channels. Square wind towers rise over patched suncloth roofs, while household water marks fade beside doorways. Gate Forty-Seven anchors the junction: its measuring throat, wheels, basin, and branching gates translate an arriving release into public cistern, household, temple, reserve, and farm shares. The town’s measuring square, ration awnings, Third Marker, workshops, and rooftops make water infrastructure inseparable from the shape of daily life.',
    people:
      'Brackwater is home to canal menders and apprentices, farmers, potters, herders, soldiers, elders, registrars, and families carrying every kind of jar. Clay tally tokens are favored because paper tears; marked rods, door signs, bells, and public ledgers make distribution visible. Clothing and tools are repaired rather than ornamental, roofs double as sleeping space, and local authority rests heavily on people whose counts and workmanship neighbors trust.',
    sources: 'The Chained Rain · The Hollow Season',
  },
  {
    id: 'eastreach',
    name: 'Eastreach',
    labelLines: ['Eastreach'],
    category: 'Ancient water road',
    x: 54.6,
    y: 55.2,
    width: 15.1,
    height: 2.8,
    place:
      'The Eastreach is the ancient engineered water road running from the Crown Basin through the Salt Marches to Rill Pass. Driven through ridges, carried over ravines, stepped down slopes, buried in long stone siphons, and exposed again at village gauges, it behaves like a river taught to follow masonry. Licensed gates and junctions divide its flow according to household, seed, public, military, and treaty measures. Along its length, later roads and settlements have narrowed, covered, or built across older beds, so the Eastreach is simultaneously canal, road, archive, and buried landscape whose true route is often better known to stone than maps.',
    people:
      'Canal menders, gate masters, apprentices, gaugers, household registrars, farmers, road crews, carters, and village councils keep the Eastreach legible and working. Their culture is organized around Waterdays, inspection posts, repair notes, household marks, and knowledge passed from master to apprentice. Communities argue fiercely over allocation, yet they also understand that every upstream wheel is tied to someone waiting at the next marker.',
    sources: 'The Chained Rain · The Hollow Season',
  },
  {
    id: 'namar',
    name: 'Namar',
    labelLines: ['Namar'],
    category: 'Kesh capital',
    x: 85.9,
    y: 60.1,
    width: 8.8,
    height: 2.8,
    place:
      'Namar, the capital of Kesh, descends in terraces from palace roofs and public scales through granary towers and lower wards to the Amber Plain. Its older waterworks do not sit apart from the city: they emerge behind walls, disappear beneath later stone, pass through storehouses, and open among gardens and old terraces. Black roofs, outer stores, public courts, protected bins, and roads full of grain make the city’s architecture inseparable from provisioning. Namar is both royal seat and working granary capital, built around the practical problem of moving water, food, petitions, and people across layers inherited from many generations.',
    people:
      'Namar brings together court households, petitioners, city engineers, granary councils, inspectors, scale keepers, clerks, millers, carters, soldiers, cooks, and lower-ward families. Public life is intensely measured: grain is separated into bread and spring seed, loads retain source marks, and petitions approach the court through visible space. Formal courtesy and ceremony coexist with workmanlike maps, waxed-cloth surveys, public rails, and scrutiny of every receipt.',
    sources: 'The Hollow Season · The Last Godroad',
  },
  {
    id: 'nine-weirs',
    name: 'Nine Weirs',
    labelLines: ['Nine Weirs'],
    category: 'Kesh receiving works',
    x: 68.8,
    y: 67.7,
    width: 10.5,
    height: 2.8,
    place:
      'The Nine Weirs are Kesh’s old receiving and flood-control works, distributed through the layered fabric of Namar rather than arranged as nine identical monuments. One structure may stand behind a military wall, another beneath later masonry, another among terraces whose old outflow has become gardens; some are reached only through storehouses or engineer-kept stairs. Together they once let water move among broad changes in height and still support roads, storage, irrigation, and city protection. Their true working map includes modern foundations and street loads, making the Weirs an evolving urban system rather than a preserved ruin.',
    people:
      'City engineers, surveyors, gate crews, storehouse workers, inspectors, map keepers, soldiers, and nearby households live with the Nine Weirs. Maintenance is generational and highly local: waxed-cloth plans record later foundations, grain stores, street weights, and routes no longer safely opened. The culture surrounding the works favors practical knowledge over ideal diagrams, because every old gate now exists beside someone’s home, garden, or livelihood.',
    sources: 'The Hollow Season · The Last Godroad',
  },
  {
    id: 'amber-plain',
    name: 'Amber Plain',
    labelLines: ['Amber Plain'],
    category: 'Kesh grain country',
    x: 79,
    y: 74.8,
    width: 15.1,
    height: 2.8,
    place:
      'The Amber Plain spreads below Namar as Kesh’s broad irrigated grain country. Shallow field cuts, old buried channels, low stone bridges, irrigation crossings, threshing boards, dikes, and roads to the outer granaries divide its fields. Farmers read the season through changing stalk color, dry husk rattle, departing birds, insects, moisture, and the way seed separates from chaff—signals more precise than distant proclamations. The Plain is not a single golden surface but a working mosaic of household plots, sampling cloths, row cords, carts, and public stores, all organized around the distinction between food for today and viable seed for spring.',
    people:
      'Farm households, harvesters, sickle crews, field clerks, sample keepers, millers, seed workers, carters, irrigation crews, and local councils sustain the Plain. Harvesting carries song as well as labor; grain is cut, bound, threshed, sampled, dried, and sorted by condition. Row cords and seed tallies preserve each household’s claim, while public practice insists that bread grain, planting seed, wet lots, and empty husks remain visibly distinct.',
    sources: 'The Hollow Season · The Last Godroad',
  },
];

export const pilgrimMapLinks: readonly PilgrimMapLink[] = [
  {
    id: 'frost',
    name: 'Frost',
    labelLines: ['Frost'],
    x: 28.6,
    y: 16.1,
    width: 7.5,
    height: 2.8,
  },
  {
    id: 'bloom',
    name: 'Bloom',
    labelLines: ['Bloom'],
    x: 39.2,
    y: 70.8,
    width: 8.3,
    height: 2.8,
  },
  {
    id: 'heat',
    name: 'Heat',
    labelLines: ['Heat'],
    x: 15.5,
    y: 50.4,
    width: 6.8,
    height: 2.8,
  },
  {
    id: 'gale',
    name: 'Gale',
    labelLines: ['Gale'],
    x: 18.6,
    y: 70.9,
    width: 6.4,
    height: 2.8,
  },
  {
    id: 'rain',
    name: 'Rain',
    labelLines: ['Rain'],
    x: 54.2,
    y: 52.3,
    width: 5.7,
    height: 2.8,
  },
  {
    id: 'harvest',
    name: 'Harvest',
    labelLines: ['Harvest'],
    x: 53.1,
    y: 73.1,
    width: 10.3,
    height: 2.8,
  },
];
