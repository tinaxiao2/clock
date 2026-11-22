/* The Fun Rotation: small, playful watches under $500, new and vintage.
   Same shape as watches.js, plus `mood` (digital | gold | play | vintage), `lasts`
   (sturdy | fair | delicate) and a one-line `wear`. Sizes in mm; `approx: true` marks an estimate. */
(function () {
  function photos(q) { return ['Photos', 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(q)]; }
  function shop(q) { return ['Shop', 'https://www.google.com/search?tbm=shop&q=' + encodeURIComponent(q)]; }
  function ebay(q) { return ['eBay', 'https://www.ebay.com/sch/i.html?_nkw=' + encodeURIComponent(q)]; }
  var CREAM = '#F6F1E7', CHAMP = '#EADBB0', BLACK = '#17181C', GOLDINK = '#CFAA61', DARKGOLD = '#6E5222';
  var VINTAGE_RULE = 'Buy one that is running, with a photo of a clean battery compartment and a return window. Skip anything listed as “untested”.';

  window.FUN_META = {
    asOf: 'November 2026',
    note: 'Specs come mostly from search summaries of maker, retailer and marketplace pages. Listing prices marked “Page checked” were read from the seller’s own page on 20 November 2026; everything else should be checked before you buy.'
  };

  var GOLD = [
    {
      id: 'f-prx25', mood: 'gold', lasts: 'sturdy', brand: 'Tissot', name: 'PRX 25', variant: 'Gold PVD · quartz',
      pitch: 'A 1978 men’s sports watch shrunk to 25 mm. Integrated bracelet, sapphire crystal, 100 m. The best-built watch on this list.',
      wear: 'With the Koché shirt dress: a man’s watch, your size.',
      refs: ['T137.010.33.021.00 (gold, champagne dial)', 'T137.010.11.351.00 (steel)'], metal: 'plated', movement: 'Swiss quartz', movementShort: 'Quartz',
      finish: 'Yellow-gold PVD over steel', crystal: 'Sapphire', wr: '100 m', bracelet: 'Integrated, gold PVD steel', era: 'In production',
      size: { shape: 'round', w: 25, l2l: 31, thick: 9, approx: true },
      draw: { style: 'round', bezelW: .07, bracelet: 'flat', bw: .74, dial: CHAMP, markers: 'stick', ink: DARKGOLD, hands: DARKGOLD },
      price: { newUsd: 495, where: 'Tissot US, Abt; about $396 grey-market', sources: 'Tissot US, Abt and WatchMaxx' },
      verdict: { fit: 'yes', fitNote: '25 mm across, and the flat bracelet makes it wear like a slim cuff. The top-to-bottom span was not published; expect about 31 mm.', budgetNote: 'Right at the ceiling in gold. The steel versions are $350–425.' },
      why: ['It is the main-watch brief at a fun-watch price: masculine design, small case, gold, quartz.', 'After the Timex, this is the safe pick: sapphire, 100 m and a two-year warranty.'],
      honest: ['The gold is a PVD coating over steel. It is harder than ordinary plating but cannot be touched up; the clasp and link edges show wear first.', 'The steel version cannot wear through at all, and costs less.', 'The integrated bracelet takes no other straps.'],
      style: { stack: 'It is a bracelet in itself. Chains on the other wrist.', looks: [['Work', 'Koché shirt dress, mules, pearls.'], ['Weekend', 'Cashmere, wide-legs, leather jacket.']], read: 'The tiny gold watch, grown up and built properly.' },
      links: [photos('Tissot PRX 25mm gold T137.010.33.021.00 wrist'), shop('Tissot PRX 25mm T137.010.33.021.00'), ['Tissot', 'https://www.tissotwatches.com/en-us/T1370103302100.html']]
    },
    {
      id: 'f-bianca', mood: 'gold', lasts: 'sturdy', brand: 'Citizen', name: 'L Bianca', variant: 'Gold-tone · solar',
      pitch: 'Light-powered, so it never needs a battery. A curved gold rectangle with a mother-of-pearl dial, sapphire crystal and a five-year warranty.',
      wear: 'With the gray plaid dress and pearls: pearl at the neck, pearl on the dial.',
      refs: ['EW5602-57D (bracelet)', 'EW5622-09P (leather)'], metal: 'plated', movement: 'Solar quartz (Eco-Drive)', movementShort: 'Solar',
      finish: 'Gold-tone steel', crystal: 'Curved sapphire', wr: '50 m', bracelet: 'Gold-tone steel', era: 'In production',
      size: { shape: 'rect', w: 21.5, h: 30, l2l: 32, approx: true },
      draw: { style: 'dolcevita', bracelet: 'oyster', bw: .74, dial: '#F3EFE9', markers: 'dot', ink: DARKGOLD, hands: DARKGOLD },
      price: { text: '$380–475', sub: 'new', where: 'Citizen US (on sale), Abt', sources: 'Citizen US and Abt' },
      verdict: { fit: 'yes', fitNote: 'About 21.5 mm wide. The length was not confirmed; expect about 32 mm.' },
      why: ['On paper the most durable new watch here: no battery to die or leak, sapphire, 50 m, and the longest warranty.'],
      honest: ['The gold-tone bracelet will still wear at the clasp over the years.', 'Citizen’s own store lets you choose the band size at checkout, including 6¼ inches, so it arrives fitted.', 'Solar watches need light. Left in a drawer for months, it will stop until it is recharged.'],
      style: { stack: 'A gold bracelet watch beside thin gold chains can look continuous. Try it with the eye chain.', read: 'Soft-edged and quietly expensive-looking.' },
      links: [photos('Citizen L Bianca EW5602-57D wrist'), shop('Citizen Bianca EW5602-57D'), ['Citizen', 'https://www.citizenwatch.com/us/en/product/EW5602-57D']]
    },
    {
      id: 'f-seiko-tank', mood: 'gold', lasts: 'fair', brand: 'Seiko', name: 'Essentials Tank', variant: 'Gold-tone · leather',
      pitch: 'The Tank look for about $200. Under 19 mm wide and under 5 mm thin, with Roman numerals on a white dial.',
      wear: 'Black strap, black mules, white dial, pearls.',
      refs: ['SWR054 (white dial, black strap)', 'SWR066 (champagne dial, brown strap)'], metal: 'plated', movement: 'Quartz', movementShort: 'Quartz',
      finish: 'Gold-tone steel', crystal: 'Hardlex mineral glass', wr: '30 m', bracelet: 'Leather strap', era: 'In production',
      size: { shape: 'rect', w: 18.9, l2l: 28.4, thick: 4.9 },
      draw: { style: 'tank', bracelet: 'leather', strap: 'black', bw: .68, markers: 'roman', dial: '#FAFAF7' },
      price: { text: '$141–225', sub: 'new old stock', where: 'Discount sellers; gone from Seiko USA', sources: 'Timepiece.com and Espling Jewelers search results' },
      verdict: { fit: 'yes', fitNote: 'Slightly narrower than your Timex and very thin. Buyers say the strap runs short, which suits your wrist.' },
      why: ['A real watchmaker’s take on the gold rectangle, for the price of a dinner out.'],
      honest: ['Mineral glass scratches more easily than sapphire.', 'How the gold is applied is not stated. Expect wear at the corners in a few years of daily use.', 'Order by reference: the men’s version (SWR052) looks the same and is larger.', 'Seiko’s own US store and two dealers no longer list it. It looks discontinued, so buy soon or not at all.'],
      style: { stack: 'Leather has no shine, so all three chains can sit right beside it.', read: 'The quiet rectangle.' },
      links: [photos('Seiko SWR054 wrist'), shop('Seiko SWR054')]
    },
    {
      id: 'f-lovely-square', mood: 'gold', lasts: 'fair', brand: 'Tissot', name: 'Lovely Square', variant: 'Gold PVD · quartz',
      pitch: 'A 20 mm gold square on a slim bracelet. The size of your Timex, with a sapphire crystal.',
      wear: 'Beside the eye chain, as one more thin gold line.',
      refs: ['T058.109.33.031.00'], metal: 'plated', movement: 'Swiss quartz', movementShort: 'Quartz',
      finish: 'Yellow-gold PVD over steel', crystal: 'Sapphire', wr: '30 m', bracelet: 'Narrow gold PVD bracelet, jewellery clasp', era: 'In production',
      size: { shape: 'rect', w: 20, h: 20, l2l: 24, approx: true },
      draw: { style: 'dolcevita', bracelet: 'flat', bw: .5, dial: '#F2F2EE', markers: 'stick', ink: DARKGOLD, hands: DARKGOLD },
      price: { newUsd: 450, where: 'Tissot US; resale about $315', sources: 'Tissot US and WatchCharts' },
      verdict: { fit: 'yes', fitNote: '20 × 20 mm, the same width as your Timex. It reads as jewellery first and a watch second.' },
      why: ['The closest thing to the Teeny Tiny Timex from a Swiss maker, with a better crystal.'],
      honest: ['Splash-resistant only (30 m).', 'A jewellery clasp on a thin coated bracelet is the likely first point of wear.', 'No independent long-term reviews were found.'],
      style: { stack: 'This one can join the stack. Wear it with one or two chains.', read: 'Jewellery that happens to tell the time.' },
      links: [photos('Tissot Lovely Square T058.109.33.031.00 wrist'), shop('Tissot Lovely Square T058.109.33.031.00'), ['Tissot', 'https://www.tissotwatches.com/en-us/T0581093303100.html']]
    },
    {
      id: 'f-lip-t18', mood: 'gold', lasts: 'fair', brand: 'Lip', name: 'Churchill T18', variant: 'Gold-plated · small seconds',
      pitch: 'A 1930s French men’s watch, the model given to Winston Churchill. Long, narrow and gold, for about €199.',
      wear: 'With brown wide-legs and cashmere, on a brown strap.',
      refs: ['671006 (gold dial, brown strap)', '671015', '671943'], metal: 'plated', movement: 'Quartz (Ronda)', movementShort: 'Quartz',
      finish: 'Gold-plated steel', crystal: 'Mineral glass', wr: '30 m', bracelet: 'Leather strap', era: 'In production',
      size: { shape: 'rect', w: 21.2, h: 30, l2l: 38.5, thick: 8.3 },
      draw: { style: 'rect', bracelet: 'leather', strap: 'brown', bw: .76, dial: '#F4F1EA', markers: 'stick', subseconds: true },
      price: { text: '€199', sub: 'new · EU delivery only', where: 'lip.fr (EU only); resellers for the US', sources: 'Lip' },
      verdict: { fit: 'edge', fitNote: 'Narrow at 21 mm, but long: 38.5 mm top to bottom, right at your line. It runs along the wrist like a Reverso.' },
      why: ['The most menswear watch in the rotation, and one almost nobody in a US boardroom will have seen.'],
      honest: ['Lip’s own shop delivers only within the EU. For the US you need a reseller, and I could not vet the one I found.', 'The movement is a common one any watchmaker can replace cheaply.', 'Mineral glass, and plating of unstated thickness, are the weak points. Splash-resistant only.'],
      style: { stack: 'On leather, the chains can sit beside it.', read: 'A grandfather’s watch from someone else’s country.' },
      links: [photos('Lip Churchill T18 671006 wrist'), ['Lip', 'https://lip.fr/en/churchill/58-lip-churchill-t18-671006']]
    }
  ];

  var VINTAGE = [
    {
      id: 'f-gucci-bangle', mood: 'vintage', lasts: 'delicate', brand: 'Gucci', name: 'Change-Bezel Bangle', variant: 'Vintage · gold-plated',
      pitch: 'A gold bangle with a watch in it, and a set of coloured rings you snap around the dial to match the outfit. Peak 1980s.',
      wear: 'Red ring with the red booties. Obviously.',
      refs: ['1100-L', '11/12.2'], metal: 'plated', movement: 'Swiss quartz', movementShort: 'Quartz',
      finish: 'Gold-plated', wr: 'None', bracelet: 'Rigid bangle', era: '1980s–90s; vintage only',
      size: { shape: 'round', w: 26, l2l: 26, thick: 7 },
      draw: { style: 'round', bezelW: .15, bracelet: 'bangle', bw: .3, dial: '#FBFAF6', markers: 'none', hands: BLACK, parts: { b: '#B3262E' } },
      price: { preLow: 300, preHigh: 500, sub: 'vintage', where: 'eBay, Catawiki, vintage dealers', sources: 'Catawiki results and eBay listings' },
      verdict: { fit: 'yes', fitNote: '26 mm, on a rigid bangle that cannot be resized. Sizes vary: one dealer example measures 6 inches inside, smaller than your 6¼-inch wrist. Get the inside measurement before you pay.' },
      why: ['The most playful watch here, and the most “you” as an accessory: it changes with the outfit.'],
      honest: ['Count the coloured rings. Many sales include only one to three of the twelve; full sets cost the most.', 'Plating wear is common on the bangle edges and where the rings seat.', 'Keep it dry. No water resistance at all.', 'No reliable authentication guide exists. Check the caseback serial and buy with returns.', VINTAGE_RULE],
      style: { stack: 'It is a bangle. Nothing else on that wrist.', looks: [['Presence', 'Black zip dress, red booties, red ring.'], ['Work', 'Gray plaid dress with the black or burgundy ring.']], read: 'A wink. The one piece that shows you are not only serious.' },
      links: [photos('Gucci 1100-L change bezel bangle watch'), ebay('Gucci 1100-L change bezel watch')]
    },
    {
      id: 'f-omega-deville', mood: 'vintage', lasts: 'delicate', brand: 'Omega', name: 'De Ville, ladies’', variant: 'Vintage · gold-plated',
      pitch: 'A real Omega for the price of a fashion watch. 1970s–80s, about 22 mm, often on its original gold mesh bracelet.',
      wear: 'With pearls and the gray plaid dress: all quiet gold.',
      refs: ['De Ville quartz cal. 1387', 'De Ville 511.xxxx (hand-wound)'], metal: 'plated', movement: 'Quartz, or hand-wound on 1970s ones', movementShort: 'Quartz',
      finish: 'Gold plate, 20 microns on some references', wr: 'None in practice', bracelet: 'Gold mesh or leather', era: '1970s–80s; vintage only',
      size: { shape: 'round', w: 22, l2l: 27, approx: true },
      draw: { style: 'round', bezelW: .06, bracelet: 'mesh', bw: .6, dial: CHAMP, markers: 'stick', ink: DARKGOLD, hands: DARKGOLD },
      price: { preLow: 200, preHigh: 450, sub: 'vintage', where: 'eBay, 1stDibs, vintage dealers', sources: 'eBay sales, 1stDibs and Catawiki' },
      verdict: { fit: 'yes', fitNote: 'About 21–22 mm: dainty, close to your Timex. Mesh bracelets usually adjust, but confirm the length.' },
      why: ['The grown-up vintage choice: a serious name, thick plating, and a size made for a small wrist.'],
      honest: ['A service on a hand-wound one runs about $175 plus parts, which can equal the price of the watch.', 'Omega limits parts supply, so repairs can be slow.', 'Look for brassing (base metal showing) on the case edges, and for repainted dials.', VINTAGE_RULE],
      style: { stack: 'Gold mesh beside gold chains reads as one piece. Wear them together.', read: 'Inherited, even if it wasn’t.' },
      links: [photos('vintage Omega De Ville ladies gold plated mesh watch'), ebay('Omega De Ville ladies gold plated quartz vintage')]
    },
    {
      id: 'f-rw-tank', mood: 'vintage', lasts: 'delicate', brand: 'Raymond Weil', name: 'Gold-plated Tank', variant: 'Vintage · 1980s',
      pitch: 'The 1980s answer to the Must de Cartier Tank, at a fraction of the price. 18k gold electroplate, Swiss quartz.',
      wear: 'Black dial, black cashmere, gold hoops.',
      refs: ['5742 “Tank Carrée”', '5741', '5744', '9006'], metal: 'plated', movement: 'Swiss quartz', movementShort: 'Quartz',
      finish: '18k gold electroplate', wr: 'None in practice', bracelet: 'Leather strap', era: '1980s; vintage only',
      size: { shape: 'rect', w: 22, l2l: 29, approx: true },
      draw: { style: 'tank', bracelet: 'leather', strap: 'black', bw: .68, dial: BLACK, markers: 'roman', ink: GOLDINK, hands: GOLDINK },
      price: { preLow: 100, preHigh: 450, sub: 'vintage', where: 'eBay, Etsy, 1stDibs', sources: 'eBay and 1stDibs asking prices' },
      verdict: { fit: 'yes', fitNote: 'About 18–23 mm wide depending on the reference. Ask for the measurement across the case.' },
      why: ['You get the vermeil-Tank look from the main list without the $1,500–3,500 price or the worry. If it dies, you are out a few hundred dollars, not a few thousand.'],
      honest: ['These are asking prices; no confirmed sale prices were found.', 'Plating wears on the lugs and edges. Replacement crowns and straps are usually generic.', VINTAGE_RULE],
      style: { stack: 'On leather, so your chains can sit beside it.', read: 'Eighties gold, worn with a straight face.' },
      links: [photos('Raymond Weil 5742 tank gold electroplated watch'), ebay('Raymond Weil 18k gold electroplated tank watch')]
    },
    {
      id: 'f-gucci-3000', mood: 'vintage', lasts: 'delicate', brand: 'Gucci', name: '3000L', variant: 'Vintage · gold-plated',
      pitch: 'A small round Gucci with the Roman numerals engraved into the gold bezel instead of printed on the dial. Often under $200.',
      wear: 'With the black zip dress and boots.',
      refs: ['3000L', '3000.2.L', '3001L'], metal: 'plated', movement: 'Swiss quartz', movementShort: 'Quartz',
      finish: 'Gold plate, probably 10 microns', wr: 'None in practice', bracelet: 'Leather strap', era: '1980s–90s; vintage only',
      size: { shape: 'round', w: 25, l2l: 30, approx: true },
      draw: { style: 'round', bezel: 'roman', bezelW: .15, bracelet: 'leather', strap: 'black', bw: .5, dial: BLACK, markers: 'none', hands: GOLDINK },
      price: { preLow: 120, preHigh: 250, sub: 'vintage', where: 'eBay, The RealReal, vintage dealers', sources: 'eBay, EBTH and The Watch Preserve' },
      verdict: { fit: 'yes', fitNote: '25 mm round. Make sure it is the 3000L: the men’s 3000M is 33 mm.' },
      why: ['It is the same idea as the solid-gold Bulgari on your main list, for a tenth of the money.'],
      honest: ['Check that the reference, caseback serial and movement signature agree.', 'Cracked crystals and worn plating are common. Avoid “for restoration” listings.', VINTAGE_RULE],
      style: { stack: 'On leather. Chains welcome beside it.', read: 'A logo you have to lean in to read.' },
      links: [photos('Gucci 3000L vintage watch roman numeral bezel'), ebay('Gucci 3000L watch')]
    },
    {
      id: 'f-lassale', mood: 'vintage', lasts: 'delicate', brand: 'Seiko', name: 'Lassale', variant: 'Vintage · ultra-thin',
      pitch: 'Seiko’s 1980s ultra-thin dress line: gold-tone, about 5 mm thick, and often under $150.',
      wear: 'Under a shirt cuff, where it all but disappears.',
      refs: ['Seiko Lassale', 'Seiko 1980s gold-tone tanks (2E20, 4N00, 1F20)'], metal: 'plated', movement: 'Quartz', movementShort: 'Quartz',
      finish: 'Gold-tone plate', crystal: 'Mineral glass', wr: 'None', bracelet: 'Leather strap or integrated bracelet', era: '1980s; vintage only',
      size: { shape: 'rect', w: 20, l2l: 27, thick: 5, approx: true },
      draw: { style: 'rect', bracelet: 'leather', strap: 'burgundy', bw: .7, dial: CHAMP, markers: 'stick', ink: DARKGOLD, hands: DARKGOLD },
      price: { preLow: 50, preHigh: 200, sub: 'vintage', where: 'eBay, Etsy', sources: 'eBay sales and dealer listings' },
      verdict: { fit: 'yes', fitNote: 'They vary from about 16 to 24 mm wide. Ask for the measurement, and for the bracelet length if it has one.' },
      why: ['The thinnest watch you can buy for the money, from a maker that built it properly.'],
      honest: ['Parts for these old movements are largely unavailable, and the ultra-thin ones are the hardest to revive. If it stops, it may be finished.', 'A leaked battery is the main killer.', 'Integrated bracelets may not adjust to your wrist.', VINTAGE_RULE],
      style: { stack: 'Thin gold beside thin gold. It belongs with the chains.', read: 'So thin it reads as a line of gold.' },
      links: [photos('vintage Seiko Lassale ladies gold watch'), ebay('Seiko Lassale ladies gold quartz')]
    },
    {
      id: 'f-chaika', mood: 'vintage', lasts: 'delicate', brand: 'Chaika', name: 'Soviet cocktail watch', variant: 'Vintage · hand-wound',
      pitch: 'A tiny gold-plated watch from the USSR that you wind by hand each morning. About 18 mm. Strange and charming.',
      wear: 'With anything. It is a conversation, not an accessory.',
      refs: ['Chaika cal. 1601A'], metal: 'plated', movement: 'Hand-wound, 17 jewels', movementShort: 'Hand-wound',
      finish: 'Gold plate', wr: 'None', bracelet: 'Leather strap or period bracelet', era: 'Soviet era; vintage only',
      size: { shape: 'round', w: 18, l2l: 23, approx: true },
      draw: { style: 'round', bezelW: .07, bracelet: 'leather', strap: 'brown', bw: .45, dial: CREAM, markers: 'dot', ink: DARKGOLD, hands: DARKGOLD },
      price: { preLow: 50, preHigh: 170, sub: 'vintage', where: 'eBay, Etsy, Soviet Watch Store', sources: 'eBay listings and Soviet Watch Store' },
      verdict: { fit: 'yes', fitNote: 'Tiny: about 17–20 mm, smaller than your Timex.' },
      why: ['The cheapest way to own something mechanical. If you are curious about building a watch, this is also a movement you can open without fear.'],
      honest: ['It needs winding every day and will not keep quartz time.', 'Most are sold unserviced. Sellers are mostly in Eastern Europe, so allow for shipping and awkward returns.', 'An occasional watch, not a daily one.'],
      style: { read: 'A small secret with a story.' },
      links: [photos('Chaika 1601A gold plated ladies watch'), ebay('Chaika 17 jewels ladies watch gold plated')]
    }
  ];

  var DIGITAL = [
    {
      id: 'f-la670', mood: 'digital', lasts: 'delicate', brand: 'Casio', name: 'Vintage LA670', variant: 'Gold-tone · digital',
      pitch: 'The actual tiny Casio. A gold digital about 25 mm wide for around $50. What your Timex was imitating.',
      wear: 'With the black cashmere: one small joke in a serious outfit.',
      refs: ['LA670WGA-1 (black face)', 'LA670WGA-9 (gold face)'], metal: 'plated', movement: 'Digital quartz, about 2 years per battery', movementShort: 'Digital',
      finish: 'Gold coating over a resin (plastic) case', wr: 'Splash only', bracelet: 'Gold-tone steel band', era: 'In production',
      size: { shape: 'rect', w: 24.6, h: 30.3, l2l: 30.3, thick: 7.3 },
      draw: { style: 'digital', bracelet: 'flat', bw: .62 },
      price: { text: '$40–55', sub: 'new', where: 'Target, Walmart, Newegg, Abt', sources: 'Target, Walmart and Newegg' },
      verdict: { fit: 'yes', fitNote: 'A little bigger than your Timex (24.6 mm against 20) and still small on you.' },
      why: ['You loved the Timex because it was like a tiny Casio. This is the tiny Casio, for a third of the price.', 'At $50 it can be worn hard and replaced without regret.'],
      honest: ['The case is plastic with a gold coating, not metal. Some owners report the gold fading or peeling within days to months; one daily wearer saw only slight tarnish.', 'Splash-resistant only, with no depth rating.', 'Treat the finish as lasting a year or two, not ten.'],
      style: { stack: 'Wear it alone on its wrist. Next to fine gold chains the coating looks like what it is.', looks: [['Work', 'Under a blazer cuff with the Koché shirt dress.'], ['Weekend', 'Cashmere, wide-legs, leather jacket.']], read: 'I know exactly what this is, and I’m wearing it anyway.' },
      links: [photos('Casio LA670WGA gold wrist'), shop('Casio LA670WGA-1')]
    },
    {
      id: 'f-teeny', mood: 'digital', lasts: 'delicate', brand: 'Timex', name: 'Teeny Tiny Timex', variant: 'Gold-tone · the original',
      pitch: 'Your favourite, still made. Before replacing it, read the note inside: the one you have may not be dead.',
      wear: 'You already know.',
      refs: ['TW2Y46600 (gold-tone)', 'TW2Y46500 (steel)'], metal: 'plated', movement: 'Digital quartz, very small battery', movementShort: 'Digital',
      finish: 'Gold-tone stainless steel', crystal: 'Mineral glass', wr: '30 m', bracelet: 'Steel expansion band, fits 135–190 mm wrists', era: 'In production; stock comes and goes',
      size: { shape: 'rect', w: 20, h: 20, l2l: 22, thick: 7, approx: true },
      draw: { style: 'digital', bracelet: 'expansion', bw: .6 },
      price: { text: '$169–179', sub: 'new', where: 'Timex US', sources: 'Timex US' },
      verdict: { fit: 'yes', fitNote: '20 mm. You know how it sits.' },
      why: ['It was your favourite. It belongs on the list, with what the research found.'],
      honest: ['Yours stopped at nine months. Timex’s warranty is one year from purchase, so it may still be covered. The battery itself is excluded.', 'It runs on a very small battery. A flat battery is a plausible reason it stopped, so a battery change or a warranty claim is worth trying before you write it off. That is my inference, not a diagnosis.', 'I found no other reports of early failure, but there are very few reviews.', 'One reviewer said the resizing links are not secure and the watch fell off within a week.'],
      style: { stack: 'As you wore it.', read: 'The one that started this.' },
      links: [photos('Teeny Tiny Timex Dimepiece TW2Y46600 wrist'), ['Timex warranty', 'https://timex.com/pages/warranty-repair'], ['Repair request', 'https://timex.com/pages/watch-repair-request']]
    },
    {
      id: 'f-la680', mood: 'digital', lasts: 'fair', brand: 'Casio', name: 'Vintage LA680', variant: 'Gold-tone · mesh band',
      pitch: 'The LA670’s bigger sister, with a light and a five-year battery. New this month on a gold mesh band.',
      wear: 'Gold mesh at the cuff of the gray plaid dress.',
      refs: ['LA680WEMG-9A (gold mesh, new)', 'LA680WGA-9 (gold link band)'], metal: 'plated', movement: 'Digital quartz with light, about 5 years per battery', movementShort: 'Digital',
      finish: 'Gold coating over a resin (plastic) case', wr: 'Splash only', bracelet: 'Gold-tone steel mesh or link band', era: 'In production',
      size: { shape: 'rect', w: 28.6, h: 33.5, l2l: 33.5, thick: 8.6 },
      draw: { style: 'digital', bracelet: 'mesh', bw: .62, face: '#3A3323' },
      price: { text: '$70–100', sub: 'new', where: 'Casio US, Pacsun, Walmart', sources: 'Casio, Pacsun and Walmart' },
      verdict: { fit: 'yes', fitNote: '28.6 mm wide: noticeably bigger than your Timex, still inside your band.' },
      why: ['The practical tiny Casio: you can read it in the dark and forget about the battery for years.'],
      honest: ['Same gold-coated plastic case as the LA670, so expect the same wear at the edges.', 'US stock of the new mesh version was not confirmed; the link-band version is easy to find at about $70.'],
      style: { stack: 'Mesh is a bracelet already. Chains on the other wrist.', read: 'Retro, on purpose.' },
      links: [photos('Casio LA680WEMG-9A gold mesh'), shop('Casio LA680WGA-9')]
    }
  ];

  DIGITAL.push({
      id: 'f-a168', mood: 'digital', lasts: 'fair', brand: 'Casio', name: 'A168 Gold', variant: 'Gold-tone · full size',
      pitch: 'You sent this one. The classic gold Casio: a light, a stopwatch and an alarm, for loose change. It is the full-size, unisex version.',
      wear: 'Pushed up a sleeve, worn as an obvious joke.',
      flag: 'You sent this',
      refs: ['A168WG-9 (US: A168WG-9UR)'], metal: 'plated', movement: 'Digital quartz with light, stopwatch and alarm', movementShort: 'Digital',
      finish: 'Gold-tone finish on the case and steel bracelet', wr: '30 m: splash only, not for swimming or showering', bracelet: 'Gold-tone steel bracelet', era: 'In production',
      size: { shape: 'rect', w: 36.3, h: 38.6, l2l: 38.6, approx: true },
      draw: { style: 'digital', bracelet: 'flat', bw: .5 },
      price: { text: 'About $11–60', sub: 'new', where: 'Walmart and many others', sources: 'Walmart listings, via search results (Walmart’s site could not be opened)' },
      verdict: { fit: 'edge', fitNote: 'About 36 mm wide, half again as wide as the LA670 and wider than anything on your main list. The top-to-bottom span stays under your 40 mm line, but the square face will look broad on a 6¼-inch wrist. This is the one that can read as Dad’s.' },
      why: [
        'You sent it. It is the original gold Casio, the watch the Teeny Tiny Timex was shrinking.',
        'If you want the same look at your scale, the LA670 (24.6 mm) and LA680 (28.6 mm) earlier in this deck are its smaller sisters.'
      ],
      honest: [
        'Walmart showed $11 in one search snapshot, which is unusually low for this model; the same item was $56.95 on Walmart Business. Check who the seller is before buying.',
        'Like the other gold Casios, the gold is a finish and will wear at the edges with daily use. Search results did not say what the case is made of.',
        'One reviewer said it was not as water resistant as advertised. Keep it dry.',
        'Strap sizing: it is a men’s-length bracelet, so expect to remove several links.'
      ],
      style: { stack: 'Alone on its wrist. At this size it is the statement.', read: 'Deliberately unserious, at full size.' },
      links: [['Walmart', 'https://www.walmart.com/ip/Casio-Vintage-Retro-Gold-Digital-Dial-Stainless-Steel-Unisex-Watch-A168WG9UR/145219115'], photos('Casio A168WG-9 gold on wrist women')]
  });

  var PLAY = [
    {
      id: 'f-ring', mood: 'play', lasts: 'sturdy', brand: 'Casio', name: 'Ring Watch', variant: 'Gold · worn on a finger',
      pitch: 'A working digital Casio shrunk into a ring. Solid stainless steel. The teeniest tiny there is.',
      wear: 'On an index finger, opposite the hand with your three rings.',
      refs: ['CRW-001G-9 (gold)', 'CRW-001-1 (silver)'], metal: 'plated', metalLabel: 'Gold-tone steel', movement: 'Digital quartz, about 2 years per battery', movementShort: 'Digital',
      finish: 'Stainless steel throughout', wr: 'Splash only', bracelet: 'Ring, US size 10.5 with two smaller spacers', era: 'In production',
      finger: true,
      size: { shape: 'rect', w: 19.5, h: 15, l2l: 15, approx: true },
      draw: { style: 'digital', bracelet: 'bangle', bw: .42 },
      price: { text: '$120–155', sub: 'new', where: 'Casio US; resale sites', sources: 'G-Central, TechRadar and StockX' },
      verdict: { fit: 'edge', fitNote: 'The face is about 19.5 mm wide, drawn here on a finger. The ring is a US 10.5 (20 mm inside) and the two spacers bring it down to about a US 9.5 and a US 8, so on small hands it is a thumb or index-finger ring.' },
      why: ['If the appeal of the Timex was how absurdly small it was, this is the end of that road.'],
      honest: ['Check the ring size against your own before buying. It will likely be too big for a ring finger.', 'US stock of the gold version was not confirmed.', 'All steel, so there is no coated plastic to wear through.'],
      style: { stack: 'You wear three delicate rings. This goes on the other hand, alone.', read: 'The detail someone notices in a meeting and asks about afterwards.' },
      links: [photos('Casio ring watch CRW-001G gold on finger'), shop('Casio CRW-001G-9')]
    },
    {
      id: 'f-la20', mood: 'play', lasts: 'sturdy', brand: 'Casio', name: 'LA-20WH', variant: 'Colour · all resin',
      pitch: 'A $33 Casio in pink, blue, black or translucent. No gold to wear off, a light, and a five-year battery.',
      wear: 'Pink, with the gray plaid dress, on a Friday.',
      refs: ['LA-20WH-4A1 (pink)', 'LA-20WH-2A (blue)', 'LA-20WH-1A (black)'], metal: 'resin', movement: 'Digital quartz with light, about 5 years per battery', movementShort: 'Digital',
      finish: 'Resin case and band', wr: 'Splash only', bracelet: 'Resin strap', era: 'In production',
      size: { shape: 'rect', w: 30.4, h: 34.5, l2l: 34.5, thick: 8.6 },
      draw: { style: 'digital', bracelet: 'resin', strap: '#E79AB5', bw: .6, parts: { c: '#E79AB5', b: '#E79AB5', a: '#F4C6D6', s: '#E79AB5' } },
      price: { text: '$33', sub: 'new', where: 'Walmart, Best Buy, Newegg', sources: 'Walmart and Newegg' },
      verdict: { fit: 'yes', fitNote: 'The biggest digital here at 30.4 mm, and only 16 g. Light enough to forget.' },
      why: ['The one you cannot hurt: nothing plated, nothing precious.'],
      honest: ['It looks like what it is: a plastic watch. That is the charm.', 'Splash-resistant only.', 'Casio US now sells only the black one; pink comes from marketplace sellers.'],
      style: { stack: 'Keep your gold on the other wrist. Plastic and fine chains do not mix.', read: 'Off-duty, and not pretending otherwise.' },
      links: [photos('Casio LA-20WH-4A1 pink wrist'), shop('Casio LA-20WH')]
    },
    {
      id: 'f-swatch', mood: 'play', lasts: 'fair', brand: 'Swatch', name: 'Lady 25', variant: 'Colour · plastic',
      pitch: 'The classic small Swatch: 25 mm, bright, $75, with a two-year warranty.',
      wear: 'Blue dial with the blue Koché shirt dress.',
      refs: ['LE108 “The Gold Within You” (clear case, blue dial)', 'LB170E (black)'], metal: 'resin', metalLabel: 'Plastic', movement: 'Quartz', movementShort: 'Quartz',
      finish: 'Plastic case', wr: '30 m', bracelet: 'Silicone strap', era: 'In production',
      size: { shape: 'round', w: 25, l2l: 30, thick: 7, approx: true },
      draw: { style: 'round', bezelW: .08, bracelet: 'resin', strap: '#F2F2EF', bw: .5, dial: '#2F5FB3', markers: 'none', hands: '#F08A2B', parts: { c: '#D9DDE3', b: '#D9DDE3', a: '#D9DDE3', s: '#D9DDE3' } },
      price: { text: '$75', sub: 'new', where: 'swatch.com', sources: 'Swatch US' },
      verdict: { fit: 'yes', fitNote: '25 mm and 7 mm thin: properly small.' },
      why: ['Colour, from the brand that made cheap watches a pleasure.'],
      honest: ['Plastic scratches, and Swatches are generally replaced, not repaired.', 'Designs change each season, so the one you like may not stay in stock.'],
      style: { stack: 'A plastic watch wants its own wrist.', read: 'Cheerful, and unbothered about it.' },
      links: [photos('Swatch Lady LE108 The Gold Within You wrist'), ['Swatch', 'https://www.swatch.com/en-us/the-gold-within-you-le108/LE108.html']]
    },
    {
      id: 'f-shark', mood: 'play', lasts: 'sturdy', brand: 'Freestyle', name: 'Shark Classic Mini', variant: 'Colour · swim-proof',
      pitch: 'A 1980s surf watch in a small size and loud colours. The only watch on either list you can swim in without thinking.',
      wear: 'On holiday. This one does not go to the office.',
      refs: ['Shark Classic Mini Clip', 'Shark Classic Mini Leash'], metal: 'resin', metalLabel: 'Polycarbonate', movement: 'Digital quartz', movementShort: 'Digital',
      finish: 'Polycarbonate case', wr: '100 m', bracelet: 'Nylon or silicone strap', era: 'In production',
      size: { shape: 'rect', w: 30, h: 33, l2l: 36, approx: true },
      draw: { style: 'digital', bracelet: 'resin', strap: '#F27B6B', bw: .62, parts: { c: '#3FB8AF', b: '#3FB8AF', a: '#F6D365', s: '#3FB8AF' } },
      price: { text: '$70', sub: 'new', where: 'freestyleusa.com, surf shops', sources: 'Freestyle and Hansen Surf' },
      verdict: { fit: 'yes', fitNote: 'Listed at 30 mm, though one listing says 38. Confirm the size before ordering.' },
      why: ['Every rotation needs one watch for water, sand and sunscreen.'],
      honest: ['Reviews are mixed, and one repeat buyer says never again without saying why.', 'The “lifetime” warranty excludes the battery, strap and crystal.', 'It comes in about a dozen colour mixes; the drawing shows the idea, not a specific one.'],
      style: { read: 'Proof you take holidays.' },
      links: [photos('Freestyle Shark Classic Mini watch wrist'), ['Freestyle', 'https://freestyleusa.com/products/shark-mini-leash-arctic-rush']]
    }
  ];

  var GOLD2 = [
    {
      id: 'f-nixon', mood: 'gold', lasts: 'sturdy', brand: 'Nixon', name: 'Small Time Teller', variant: 'All gold · quartz',
      pitch: 'A plain, solid 26 mm gold watch for $150, rated to 100 m. Minimal dial, five-link bracelet.',
      wear: 'With the leather jacket, where polished gold would look too careful.',
      refs: ['A399-502-00 (All Gold)'], metal: 'plated', movement: 'Quartz (Miyota)', movementShort: 'Quartz',
      finish: 'Gold-plated stainless steel', crystal: 'Hardened mineral glass', wr: '100 m', bracelet: 'Five-link steel, locking clasp', era: 'In production',
      size: { shape: 'round', w: 26, l2l: 31, thick: 9, approx: true },
      draw: { style: 'round', bezelW: .07, bracelet: 'jubilee', bw: .54, dial: '#D9B76A', markers: 'stick', ink: '#5E4619', hands: '#5E4619' },
      price: { newUsd: 150, where: 'nixon.com, Zappos', sources: 'Nixon and Zappos' },
      verdict: { fit: 'yes', fitNote: '26 mm, in the middle of your band, with a 14 mm bracelet.' },
      why: ['The sturdiest cheap gold watch found: a steel case, a common movement any shop can replace, and real water resistance.'],
      honest: ['The two-year warranty excludes wear, the crystal, the case and the bracelet.', 'Gold plating will thin at the clasp with daily wear.', 'A surf-brand watch: handsome, with no watchmaking pedigree.'],
      style: { stack: 'Five-link gold beside thin chains gets busy. Chains opposite.', read: 'Gold, without ceremony.' },
      links: [photos('Nixon Small Time Teller all gold wrist'), ['Nixon', 'https://nixon.com/products/small-time-teller-all-gold']]
    },
    {
      id: 'f-cavatina', mood: 'gold', lasts: 'fair', brand: 'Timex', name: 'Cavatina Mini', variant: 'Gold-tone · analog',
      pitch: 'Smaller than the Teeny Tiny: a 17 mm gold analog watch on the same kind of stretch band.',
      wear: 'Stacked with the chains, as a fourth gold line.',
      refs: ['TW2Y47400 (gold-tone, cream dial)', 'TW2Y66900'], metal: 'plated', movement: 'Quartz, very small battery', movementShort: 'Quartz',
      finish: 'Gold-tone stainless steel', wr: '30 m', bracelet: 'Steel expansion band', era: 'In production',
      size: { shape: 'round', w: 17, l2l: 19, thick: 7.5, approx: true },
      draw: { style: 'round', bezelW: .08, bracelet: 'expansion', bw: .62, dial: CREAM, markers: 'dot', ink: DARKGOLD, hands: DARKGOLD },
      price: { text: '$139', sub: 'new', where: 'Timex and retailers', sources: 'Timex and retailer listings' },
      verdict: { fit: 'yes', fitNote: '17 mm: the smallest wristwatch on the list, smaller than your Timex.' },
      why: ['If what you miss is the scale of the Timex, this goes further, with hands instead of digits.'],
      honest: ['Same maker, same tiny battery and same one-year warranty as the watch that stopped on you.', 'No owner reports were found either way.', 'The gold-tone version is out of stock at Timex today; the two-tone version is available.'],
      style: { stack: 'Small enough to live in the stack with your chains.', read: 'Jewellery first.' },
      links: [photos('Timex Cavatina Mini 17mm TW2Y47400 wrist'), shop('Timex Cavatina Mini TW2Y47400')]
    },
    {
      id: 'f-casio-tank', mood: 'gold', lasts: 'fair', brand: 'Casio', name: 'LTP-V007G', variant: 'Gold-tone · tiny tank',
      pitch: 'A 22 mm gold rectangle on a gold bracelet for about $45. Plated steel, not coated plastic.',
      wear: 'The one to leave in your travel bag.',
      refs: ['LTP-V007G-9B (Roman dial)', 'LTP-V007G-9E (plain dial)'], metal: 'plated', movement: 'Quartz, about 3 years per battery', movementShort: 'Quartz',
      finish: 'Gold ion-plated stainless steel', crystal: 'Mineral glass', wr: 'Splash only', bracelet: 'Gold-tone steel', era: 'In production',
      size: { shape: 'rect', w: 22, h: 26, l2l: 31, thick: 7.5, approx: true },
      draw: { style: 'rect', bracelet: 'flat', bw: .72, dial: CHAMP, markers: 'roman', ink: DARKGOLD, hands: DARKGOLD },
      price: { text: '$36–67', sub: 'new', where: 'Amazon, Walmart, Newegg', sources: 'Walmart and Newegg' },
      verdict: { fit: 'yes', fitNote: '22 × 31 mm, the same footprint as the Panthère on your main list.' },
      why: ['The cheapest way to try the gold-rectangle shape on your wrist before spending thousands on one.'],
      honest: ['No owner reports on how the plating holds up were found.', 'Mineral glass, splash-resistant only.', 'Casio does not sell this model in the US, so it comes from marketplace sellers.'],
      style: { stack: 'A gold bracelet watch: chains on the other wrist.', read: 'A rehearsal for the real thing.' },
      links: [photos('Casio LTP-V007G-9B wrist'), shop('Casio LTP-V007G-9B')]
    }
  ];

  var ORDER = ['f-la670', 'f-a168', 'f-prx25', 'f-gucci-bangle', 'f-ring', 'f-bianca', 'f-teeny', 'f-omega-deville', 'f-nixon', 'f-la20', 'f-seiko-tank', 'f-rw-tank',
    'f-la680', 'f-swatch', 'f-lovely-square', 'f-gucci-3000', 'f-cavatina', 'f-shark', 'f-lip-t18', 'f-lassale', 'f-casio-tank', 'f-chaika'];
  var all = GOLD.concat(VINTAGE, DIGITAL, PLAY, GOLD2), map = {};
  all.forEach(function (w) { map[w.id] = w; });
  window.FUN = ORDER.map(function (id) { return map[id]; }).concat(all.filter(function (w) { return ORDER.indexOf(w.id) < 0; }));
})();
