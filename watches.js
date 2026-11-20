/* The Main Watch candidates, in recommended order.
   Sizes in mm. `l2l` is the top-to-bottom span on the wrist; `approx: true` marks a span that
   could not be confirmed and is estimated. Prices are USD. */
(function () {
  function photos(q) { return ['Photos', 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(q)]; }
  function listings(q) { return ['Listings', 'https://www.chrono24.com/search/index.htm?dosearch=true&query=' + encodeURIComponent(q)]; }
  var BLUE = '#2C4A9A', CREAM = '#F6F1E7', CHAMP = '#EADBB0';

  window.WATCH_META = {
    asOf: 'November 2026',
    note: 'Specs and price ranges come mostly from search summaries of maker, dealer and market-tracker pages. Listings marked “Page checked” were read from the seller’s own page on 20 November 2026; confirm everything else with the seller before you buy.'
  };

  window.WATCHES = [
    {
      id: 'panthere-steel', brand: 'Cartier', name: 'Panthère de Cartier', variant: 'Small · steel',
      pitch: 'The one to beat. Square case, exposed screws, a bracelet that drapes like jewelry, and it is quartz.',
      refs: ['WSPN0006'], metal: 'steel', movement: 'Quartz', movementShort: 'Quartz',
      crystal: 'Sapphire', wr: '30 m (splash-safe, not for swimming)', bracelet: 'Steel brick-link, integrated', era: 'In production',
      size: { shape: 'rect', w: 22, l2l: 30, thick: 6 },
      draw: { style: 'panthere', bracelet: 'brick', bw: .66, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM },
      price: { newUsd: 5300, preLow: 3700, preHigh: 5100, sources: 'Cartier US, WatchCharts and dealer listings' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'Sits well inside your wrist with room on both sides. Because the bracelet is part of the case, it wears like a bracelet with a dial, which is exactly the Timex gesture.',
        budgetNote: 'New is $5,300 after Cartier’s May 2026 increase, just over your ceiling. Pre-owned is where it fits: about $3,700 on the open market, about $5,100 from a dealer with a warranty.'
      },
      why: [
        'It was already on your list, and the research holds up: it is quartz, thin, sized for your wrist, and reachable pre-owned.',
        'The design is a man’s watch made small. The screws and the square bezel come straight from the Santos, the first pilot’s wristwatch.'
      ],
      honest: [
        'Quartz under sapphire crystal: very little to go wrong. Cartier lists a battery service at about $60 and a complete service from $430.',
        'Only splash-resistant (30 m). Take it off to swim.',
        'The steel version means giving up gold. The current two-tone is about $10,000 new and $7,000–8,400 pre-owned.',
        'Buying pre-owned: check that the clasp is signed, the reference matches the papers and all the links are there. Aftermarket bracelets are common.'
      ],
      style: {
        cuff: 'At 6 mm it disappears under a shirt cuff and reappears when you reach for something. With the flared sleeves of the gray plaid dress it flashes instead of sitting on show.',
        stack: 'It wears like a bracelet, so don’t crowd it: watch on one wrist, your three chains on the other. Steel against your gold is a deliberate contrast here. Pearls and hoops stay warm; the wrist goes cool.',
        looks: [
          ['Boardroom', 'Blue Koché shirt dress, black pointed mules, pearls. The steel picks up the menswear in the shirting.'],
          ['Downtown', 'Black cashmere, brown wide-legs, the Levi’s leather jacket. The steel finally matches the jacket’s hardware, which your gold never does.']
        ],
        read: 'Precise, not precious.'
      },
      links: [photos('Cartier Panthere small steel WSPN0006 wrist'), listings('Cartier Panthere WSPN0006'),
        ['Cartier', 'https://cartier.com/en-us/watches/collections/panthere-de-cartier/panthere-de-cartier-watch-small-model-CRWSPN0006.html']]
    },
    {
      id: 'gs-stgf359', brand: 'Grand Seiko', name: 'The small Snowflake', variant: 'STGF359 · steel',
      pitch: 'Your Snowflake, at 28.9 mm. Same snow-textured white dial, quartz accurate to ten seconds a year, and the toughest watch on this list.',
      refs: ['STGF359'], metal: 'steel', movement: 'Quartz (4J52), accurate to ±10 seconds a year', movementShort: 'Quartz',
      crystal: 'Sapphire', wr: '100 m', bracelet: 'Steel, 14 mm, push-button clasp', era: 'In production',
      size: { shape: 'round', w: 28.9, l2l: 35.4, thick: 8.7 },
      draw: { style: 'round', bracelet: 'oyster', bw: .485, dial: '#F7F8FA', texture: 'snow', markers: 'stick', seconds: '#3B6FB5', date: true },
      price: { newUsd: 2600, preLow: 1950, preHigh: 2700, sources: 'Grand Seiko US, WatchCharts and Bob’s Watches' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'Right in the middle of your size band. At 35 mm top to bottom it leaves a clear margin of wrist on each side.',
        budgetNote: 'About $2,600 new with a warranty, and $1,950–2,700 pre-owned. The used one I could open costs more than a new one, so buy new. It leaves room in the budget for a fun watch or two.'
      },
      why: [
        'You wanted the Snowflake for the dial. This is that dial in a case made for a wrist your size, for less than half the price of the 41 mm original.',
        'After a watch that died in nine months: 100 m water resistance, sapphire crystal and a quartz movement built in-house to a far higher standard than most.'
      ],
      honest: [
        'It is steel only. Grand Seiko makes no small quartz watch in yellow gold or yellow two-tone.',
        'Battery changes are charged even under warranty. Owner estimates run $150–250.',
        'Whether the clasp has a fine adjustment is unconfirmed, so have the bracelet sized carefully.',
        'The brand is not widely recognised outside watch circles. Depending on the room, that is the appeal.'
      ],
      style: {
        cuff: 'At 8.7 mm it sits a little proud of a tight cuff. Wear it with the cashmere pushed to the forearm, or under a looser shirt cuff.',
        stack: 'All steel, so it is the one cool note against your gold. Give it its own wrist; the dial texture is the detail, and chains beside it would compete.',
        looks: [
          ['Boardroom', 'The gray plaid boatneck dress. The white dial and the gray plaid are the same temperature; this is its best pairing in your closet.'],
          ['Evening', 'The black long-sleeve zip dress and the over-the-knee boots. The white dial becomes the only light thing on you.']
        ],
        read: 'The one who knows. Almost nobody in the room will recognise it, except the person worth talking to.'
      },
      links: [photos('Grand Seiko STGF359 wrist'), listings('Grand Seiko STGF359'),
        ['Grand Seiko', 'https://www.grand-seiko.com/us-en/collections/stgf359g']]
    },
    {
      id: 'francaise-tt', brand: 'Cartier', name: 'Tank Française', variant: 'Small · steel & gold',
      pitch: 'The same footprint as your Timex, in two-tone Cartier. A Tank with shoulders, on a chain-link bracelet.',
      refs: ['W51007Q4 (small)', 'W51012Q4 (midsize)'], metal: 'two-tone', movement: 'Quartz', movementShort: 'Quartz',
      wr: '30 m', bracelet: 'Steel and 18k yellow gold chain-link', era: 'Discontinued; pre-owned only',
      size: { shape: 'rect', w: 20.5, l2l: 25, approx: true },
      draw: { style: 'francaise', bracelet: 'francaise', bw: .7, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM, parts: { b: 'steel' } },
      price: { preLow: 3500, preHigh: 4300, sources: 'WatchCharts and dealer listings' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'The smallest watch here: about 20 mm wide, the same as your Timex. If you want a touch more presence, the midsize is about 25 × 30 mm and sits squarely in your band.',
        budgetNote: 'The small two-tone runs about $3,500–4,300. The midsize two-tone is about $4,000–5,100, the top of your budget.'
      },
      why: [
        'It is the most direct heir to the Teeny Tiny Timex: tiny, rectangular, gold in the bracelet, and built like a tool.',
        'Real gold within budget, on a watch with Cartier’s most architectural case.'
      ],
      honest: [
        'Sellers disagree on the exact measurements, and thickness and crystal are unconfirmed. Ask for both.',
        'This is the older generation. The current small steel version (WSTA0129, 21.2 × 25.7 mm, sapphire) is $4,450 new if you would rather have a warranty than gold.',
        'On any pre-owned Cartier bracelet watch, check for stretch, missing links and replaced clasps, and ask when the battery was last changed.',
        'Splash-resistant only (30 m).'
      ],
      style: {
        cuff: 'Thin and flat, so it lives easily under a cuff. The squared shoulders repeat the line of a blazer.',
        stack: 'Two-tone is your bridge metal. The gold links talk to your chains and hoops; the steel talks to the leather jacket. Keep one chain beside it, the rose-gold eye chain, and move the other two across.',
        looks: [
          ['Boardroom', 'Black cashmere, brown wide-legs, black mules, pearls. Small gold at the wrist, small pearls at the neck: restraint in two places.'],
          ['With edge', 'Koché shirt dress under the Levi’s jacket, red booties. The steel in the watch is what lets the silver hardware and your gold share an outfit.']
        ],
        read: 'Tailored. The watch equivalent of a good shoulder.'
      },
      links: [photos('Cartier Tank Francaise small two tone W51007Q4 wrist'), listings('Cartier Tank Francaise W51007Q4')]
    },
    {
      id: 'constellation-27', brand: 'Omega', name: 'Constellation', variant: 'Steel & gold · quartz',
      pitch: 'Gold claws, gold bezel, an armoured bracelet. Quartz, rated to 100 m, and comfortably mid-budget.',
      refs: ['123.20.27.60.08.001 (champagne dial)', '123.20.27.60.05.002 (mother-of-pearl)', '123.20.24.60.08.001 (24 mm)'],
      metal: 'two-tone', movement: 'Quartz (cal. 1376), about four years per battery', movementShort: 'Quartz',
      wr: '100 m', bracelet: 'Steel with 18k yellow gold bars, integrated', era: '2009 generation; discontinued',
      size: { shape: 'round', w: 27, l2l: 33, approx: true },
      draw: { style: 'round', bezel: 'claws', bezelW: .11, bracelet: 'bars', bw: .66, dial: CHAMP, markers: 'stick', ink: '#6E5222', hands: '#6E5222' },
      price: { preLow: 2400, preHigh: 3500, sources: 'WatchCharts and Gray & Sons' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'Inside your band, though the wide integrated bracelet makes it wear a little bigger than 27 mm suggests. There is a 24 mm if you want it daintier.',
        budgetNote: 'About $2,400–3,500 for the 2009 generation in yellow-gold two-tone. The current 25 mm two-tone is $5,800 new and about $2,800–3,800 pre-owned.'
      },
      why: [
        'The best match on paper for gold plus quartz plus durable: real gold on the bezel and bracelet, a quartz movement, and a proper 100 m rating.',
        'It has the most structure of anything here. The bracelet and case read as one piece of armour.'
      ],
      honest: [
        'Check the full 14-digit reference. The ending decides yellow gold versus red gold, and sellers get it wrong.',
        'Only this 2009 generation is rated 100 m. The 1990s version ($1,100–2,100) and the current one are 30 m.',
        'Most pre-owned examples have shortened bracelets with no spare links. Your wrist is small, so that is less of a risk, but confirm the length.',
        'Fakes exist: look for links gilded only on the front and a blurry observatory engraving on the back.',
        'A full Omega quartz service is around $450; a battery and pressure test is $50–150.'
      ],
      style: {
        cuff: 'This one is not for hiding. The bracelet is a cuff in its own right, so wear it below a three-quarter sleeve or with the cashmere pushed up.',
        stack: 'Nothing else on that wrist. All three chains go to the other side. The gold bars already do the work of a stack.',
        looks: [
          ['Boardroom', 'The gray plaid dress, mules, hoops, no necklace. Let the wrist be the one statement.'],
          ['Presence', 'Black zip dress, red booties. Gold bars against black is the most “power suit” this list gets.']
        ],
        read: 'Polished and a little eighties, in the way a power suit is.'
      },
      links: [photos('Omega Constellation 27 quartz 123.20.27.60.08.001 wrist'), listings('Omega Constellation 123.20.27.60.08.001')]
    },
    {
      id: 'santos-galbee', brand: 'Cartier', name: 'Santos Galbée', variant: 'Small · steel & gold',
      pitch: 'The first pilot’s watch, scaled to 24 mm. Gold bezel, gold screws down the bracelet. Masculine structure, literally.',
      refs: ['W20012C4 (case no. 1057930)'], metal: 'two-tone', movement: 'Quartz', movementShort: 'Quartz',
      wr: 'Unconfirmed; treat as splash-only', bracelet: 'Steel with 18k yellow gold screws', era: 'Discontinued; pre-owned only',
      size: { shape: 'rect', w: 24, l2l: 35, thick: 6 },
      draw: { style: 'santos', bracelet: 'santos', bw: .62, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM },
      price: { preLow: 3400, preHigh: 5400, sources: 'WatchCharts, Gray & Sons and dealer listings' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'About 24 × 35 mm, so it covers more wrist than the Panthère but stays inside your line. It is the largest-looking Cartier here that still reads as yours.',
        budgetNote: 'Most sit at $3,400–4,700. The cleanest examples ask a little over $5,000.'
      },
      why: [
        'You said you like men’s watches. This is one: the Santos was designed for an aviator in 1904, and this is that design made small, not softened.',
        'Two-tone gold, quartz, and inside the budget.'
      ],
      honest: [
        'Sellers call it 24, 25 or 26 mm. Ask for the measurement across the case.',
        'Over-polishing is the main risk: it softens the bezel edge and the screw heads. Avoid any where the screws sit flush with the bracelet.',
        'Widely counterfeited, and replacement bracelets and clasps are common. Buy from a dealer who guarantees authenticity.',
        'Confirm it is the quartz version and ask about battery history. Old batteries can leak.',
        'Skip the 29 mm: it spans about 41 mm, just past your line.'
      ],
      style: {
        cuff: 'Slim enough for a cuff at 6 mm. The screws catch light, so it reads even when only half of it shows.',
        stack: 'The gold screws make their own pattern, so keep that wrist quiet: chains on the other side, or just the eye chain alongside.',
        looks: [
          ['Boardroom', 'Koché shirt dress, mules, pearls. Menswear shirt, pilot’s watch, pearl necklace: your whole thesis in one outfit.'],
          ['Downtown', 'Black cashmere, wide-legs, leather jacket. Two-tone squares the jacket’s silver hardware with your gold.']
        ],
        read: 'Engineered. You can see how it is put together, and that is the point.'
      },
      links: [photos('Cartier Santos Galbee small two tone W20012C4 wrist'), listings('Cartier Santos Galbee W20012C4')]
    },
    {
      id: 'panthere-vintage-tt', brand: 'Cartier', name: 'Panthère, vintage', variant: 'Small · steel & gold',
      pitch: 'The dream in gold. The 1980s–90s original, with gold rows through the bracelet, at the very top of your budget.',
      refs: ['1057917', '1120'], metal: 'two-tone', movement: 'Quartz', movementShort: 'Quartz',
      wr: '30 m when new; assume none now', bracelet: 'Steel with 18k yellow gold rows', era: '1980s–2000s; pre-owned only',
      size: { shape: 'rect', w: 22, l2l: 30 },
      draw: { style: 'panthere', bracelet: 'brick', bw: .66, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM },
      price: { preLow: 4400, preHigh: 6500, sources: 'Archiva sale records, Gray & Sons and dealer listings' },
      verdict: {
        fit: 'yes', budget: 'stretch',
        fitNote: 'Same 22 mm case as the current Panthère, so the fit is identical. The gold bezel makes it read slightly larger.',
        budgetNote: 'Past sales centre around $4,350, and dealers have sold them at $4,450–4,650, but current asking prices run $6,000 and up. It is findable under $5,000 with patience, not on demand.'
      },
      why: [
        'If the Panthère is the answer and gold is the preference, this is the only way to have both anywhere near $5,000.',
        'The number of gold rows in the bracelet varies (one, two or three). More gold costs more.'
      ],
      honest: [
        'Bracelet stretch is the main fault. Hold the watch by the case and let the bracelet hang: it should not droop.',
        'Older gold links are hollow and can gap. Replacement bracelets and clasps are very common, so check the clasp is signed.',
        'Lacquered dials can craze and cream dials darken with age.',
        'Thirty-year-old quartz: confirm it runs, and ask when it was last serviced and whether Cartier did it.',
        'This is a careful purchase, not a quick one. The steel Panthère is the lower-risk way to the same shape.'
      ],
      style: {
        cuff: 'Thin, like the current one. The gold bezel shows as a warm line at the edge of a cuff.',
        stack: 'This is the one watch here that could join your stack. Gold rows beside thin gold chains look continuous. Try it with the eye chain and one other, and move the third across.',
        looks: [
          ['Boardroom', 'The gray plaid dress, pearls, hoops. Everything warm and small; nothing shouts.'],
          ['Evening', 'Black zip dress, over-the-knee boots. Vintage gold against black reads as inherited, in the best way.']
        ],
        read: 'Old money, your size.'
      },
      links: [photos('Cartier Panthere vintage two tone 1057917 wrist'), listings('Cartier Panthere 1057917')]
    },
    {
      id: 'lady-datejust', brand: 'Rolex', name: 'Lady-Datejust 26', variant: 'Steel & gold · fluted bezel',
      pitch: 'The boardroom classic at its smallest. Everyone knows what it is. Prices jumped this year, and it is automatic, not quartz.',
      refs: ['69173', '79173 (later, sturdier bracelet, pricier)'], metal: 'two-tone', movement: 'Automatic (cal. 2135)', movementShort: 'Automatic',
      crystal: 'Sapphire', wr: 'Screw-down crown; have it pressure-tested', bracelet: 'Steel and 18k yellow gold Jubilee', era: '1980s–1999; pre-owned only',
      size: { shape: 'round', w: 26, l2l: 33, thick: 11 },
      draw: { style: 'round', bezel: 'fluted', bracelet: 'jubilee', bw: .5, dial: CHAMP, markers: 'stick', date: true, cyclops: true, hands: '#8A692E', ink: '#6E5222' },
      price: { preLow: 4000, preHigh: 7300, sources: 'WatchCharts, Bob’s Watches, SwissWatchExpo and eBay sales' },
      verdict: {
        fit: 'yes', budget: 'stretch',
        fitNote: 'A textbook fit at 26 mm and about 33 mm top to bottom. It is thicker than the Cartiers, around 11 mm, so it sits up off the wrist.',
        budgetNote: 'Small Rolex prices rose sharply in 2026; Bob’s Watches reports the 26 mm up roughly 39% in six months. Dealers now ask $5,300–7,300. Only private or no-papers sales land at $4,000–5,000. I told you earlier this was the realistic route to gold under $5,000. That is now a stretch.'
      },
      why: [
        'It was on your list, and it fits you better than any other Rolex. The Datejust is a men’s design; this is that design at 26 mm.',
        'It is the most recognised watch here. In a room of executives, nobody needs it explained.'
      ],
      honest: [
        'It is mechanical. Left off the wrist for two days it stops and needs resetting, date included.',
        'Rolex’s published service price for watches of this era is $990–1,430, roughly every ten years.',
        'Pre-2000 Jubilee bracelets have hollow centre links that stretch. Repairs run $150 to $800 or more.',
        'Aftermarket diamond bezels and dials are everywhere. Ask in writing whether the dial and bezel are original.',
        'On a case this small, over-polishing shows: look for soft lugs and blurred fluting.',
        'The Lady-Datejust 28 and every two-tone Datejust 31 are well outside the budget ($7,000 and up).'
      ],
      style: {
        cuff: 'About 11 mm thick, so it rides over a fitted cuff instead of under it. Plan for it to show.',
        stack: 'Two-tone Jubilee is busy. Keep that wrist to the watch alone and wear the chains opposite.',
        looks: [
          ['Boardroom', 'Koché shirt dress, mules, pearls. Classic on classic; the asymmetry of the dress stops it going preppy.'],
          ['Keeping it yours', 'Black cashmere, wide-legs, leather jacket, red booties. A Datejust needs something a little wrong next to it, or it wears you.']
        ],
        read: 'Universally legible. Everyone in the room knows what it is, which is both the point and the risk.'
      },
      links: [photos('Rolex Lady Datejust 26 69173 two tone wrist'), listings('Rolex Lady-Datejust 69173')]
    },
    {
      id: 'tudor-royal', brand: 'Tudor', name: 'Royal 28', variant: 'Steel & gold',
      pitch: 'Rolex’s sibling: Datejust manners, a notched gold bezel and an integrated bracelet, at about half the price. Automatic.',
      refs: ['M28303'], metal: 'two-tone', movement: 'Automatic (T201), 38-hour reserve', movementShort: 'Automatic',
      crystal: 'Sapphire', wr: '100 m', bracelet: 'Five-link, integrated', era: '2020–2026; just discontinued',
      size: { shape: 'round', w: 28, l2l: 34, thick: 9.8, approx: true },
      draw: { style: 'round', bezel: 'fluted', bracelet: 'jubilee', bw: .62, dial: '#ECEDEF', markers: 'roman', date: true },
      price: { preLow: 2800, preHigh: 4250, sources: 'WatchCharts and Watches of Switzerland pre-owned' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'At 28 mm it is in the middle of your band. The top-to-bottom span was not published; expect about 34 mm.',
        budgetNote: 'Last retail was $4,650. Pre-owned is about $2,800–4,250 and still falling since it was discontinued in April 2026. The new Royal 30 is $3,250 in steel and $5,400 in two-tone.'
      },
      why: [
        'If the Lady-Datejust is what you want and the price is what stops you, this gets you the look, the 100 m case and the family name for much less.',
        'A sporty, integrated-bracelet shape: more structure than the Rolex, less ceremony.'
      ],
      honest: [
        'Mechanical, with a short 38-hour reserve. Take it off Friday night and it has stopped by Sunday.',
        'It loses value: the market sits about 40% under last retail. Good for buying used, bad for reselling.',
        'The integrated bracelet takes no other straps, so check that every link is included.',
        'Service goes through Rolex and Tudor centres. Estimates range widely, from $400 to $1,300.'
      ],
      style: {
        cuff: 'Just under 10 mm. It will clear a relaxed cuff and sit proud of a tight one.',
        stack: 'Give it its own wrist. The five-link bracelet has plenty going on.',
        looks: [
          ['Boardroom', 'Gray plaid dress, mules. The notched bezel is quieter than Rolex fluting, so it suits the room without announcing itself.'],
          ['Weekend', 'Cashmere, wide-legs, leather jacket. This is the most casual-capable two-tone on the list.']
        ],
        read: 'Datejust manners without the Rolex announcement.'
      },
      links: [photos('Tudor Royal 28 two tone M28303 wrist'), listings('Tudor Royal 28 M28303')]
    },
    {
      id: 'tank-must', brand: 'Cartier', name: 'Tank Must', variant: 'Large · steel · new',
      pitch: 'The Tank, bought new with a warranty and money to spare. The purest rectangle on the list, on a black strap.',
      refs: ['WSTA0136 (large, strap)', 'WSTA0106 (large, bracelet)', 'WSTA0135 (small, strap)'], metal: 'steel', movement: 'Quartz', movementShort: 'Quartz',
      crystal: 'Sapphire', wr: '30 m', bracelet: 'Black calfskin strap, or steel bracelet', era: 'In production',
      size: { shape: 'rect', w: 25.5, l2l: 33.7, thick: 6.6 },
      draw: { style: 'tank', bracelet: 'leather', strap: 'black', bw: .68, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM },
      price: { lead: 'new', newUsd: 3900, preLow: 2900, preHigh: 3600, sources: 'Cartier US and WatchCharts' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'Cartier calls this “large”, but at 25.5 × 33.7 mm it is squarely in your band. The small (22 × 29.5 mm) is the daintier option.',
        budgetNote: '$3,900 new on the strap; the small is $3,750 on a strap or $4,100 on a steel bracelet. Pre-owned examples of the previous reference run $2,900–3,600.'
      },
      why: [
        'It is the only Cartier here you can buy new inside the budget, with the long warranty that comes with it. After the Timex, that counts.',
        'The Tank is the original menswear watch that women took over. No watch is more “masculine structure, feminine posture”.'
      ],
      honest: [
        'Steel only at this price. A gold Tank is well beyond the budget.',
        'A leather strap wears out and will want replacing every year or two. It also makes the watch easy to restyle.',
        'Skip the solar version. Owners of the first one report failures, and the second has no track record yet.',
        'Splash-resistant only (30 m).'
      ],
      style: {
        cuff: 'Made for a cuff: 6.6 mm thin and flat. It is the watch that most rewards a crisp shirt sleeve.',
        stack: 'A leather strap has no shine of its own, so this is the one watch your three chains can sit right beside. Strap, then gold: the stack frames it.',
        looks: [
          ['Boardroom', 'Koché shirt dress, mules, pearls. Black strap, black shoes, white dial, white pearls. Very deliberate.'],
          ['Swap the strap', 'Put it on a burgundy or tan strap for the brown wide-legs and cashmere. Two straps make it two watches.']
        ],
        read: 'Quiet authority. It is what someone wears when they have nothing to prove.'
      },
      links: [photos('Cartier Tank Must large steel WSTA0136 wrist'), listings('Cartier Tank Must WSTA0041'),
        ['Cartier', 'https://www.cartier.com/en-us/watches/collections/tank/tank-must-de-cartier-watch-CRWSTA0136.html']]
    },
    {
      id: 'reverso', brand: 'Jaeger-LeCoultre', name: 'Reverso', variant: 'Small · steel & gold · quartz',
      pitch: 'An Art Deco rectangle built for polo players, whose case flips over to protect the dial. For the room that notices.',
      refs: ['260.5.08 (steel & gold)', '260.8.08 (steel)'], metal: 'two-tone', movement: 'Quartz', movementShort: 'Quartz',
      crystal: 'Sapphire', wr: 'About 30 m when new; not guaranteed now', bracelet: 'Leather strap or metal bracelet', era: '1990s–2000s; pre-owned only',
      size: { shape: 'rect', w: 20, h: 27, l2l: 33, approx: true },
      draw: { style: 'reverso', bracelet: 'leather', strap: 'brown', bw: .7, markers: 'stick', dial: '#F4F1EA' },
      price: { preLow: 3850, preHigh: 5500, sources: 'Gray & Sons, 1stDibs and Wristler' },
      verdict: {
        fit: 'yes', budget: 'stretch',
        fitNote: 'Narrow and tall: about 20 mm wide and around 33 mm top to bottom. It follows the line of your arm instead of sitting across it.',
        budgetNote: 'The two-tone has sold at $3,850 and is asked at $4,400–5,500. The all-steel version is easier: about $2,800–4,500.'
      },
      why: [
        'The most architectural watch here, and a sports watch by origin. It has the structure you like without a single masculine cliché.',
        'The blank steel back can be engraved. A watch with your own mark on it answers the “build my own” itch a little.'
      ],
      honest: [
        'Sellers disagree on the dimensions of every version. Ask for caliper measurements before you commit.',
        'Some references that look identical are hand-wound, not quartz. Confirm the movement.',
        'Water resistance on older ones is not guaranteed. Treat it as none.',
        'A JLC battery service takes about a week. One full-service estimate seen was around €790.',
        'The newer Reverso Classic Small quartz (Q2618430, 21 × 34 mm) is about $4,000–5,250 pre-owned if you want a younger watch.'
      ],
      style: {
        cuff: 'Slim, and the long rectangle sits parallel to a sleeve edge. It looks its best half-covered.',
        stack: 'On leather, your chains can sit beside it. If you find one on the two-tone bracelet, clear that wrist.',
        looks: [
          ['Boardroom', 'The gray plaid dress. Deco lines against plaid, pearls above: it looks considered, not bought.'],
          ['Evening', 'Black zip dress, over-the-knee boots, hair down. Flip the case to the plain steel side for the evening; it becomes a bracelet.']
        ],
        read: 'Architectural. The person who notices it will come and ask.'
      },
      links: [photos('Jaeger-LeCoultre Reverso 260.5.08 two tone wrist'), listings('Jaeger-LeCoultre Reverso 260.5.08')]
    },
    {
      id: 'bulgari', brand: 'Bulgari', name: 'Bulgari Bulgari', variant: 'Solid gold · quartz',
      pitch: 'Solid 18k gold from about $2,400. A flat, coin-like bezel with the name engraved twice. Quartz, on a strap.',
      refs: ['BB 26 GL', 'BB 33 GL (33 mm)'], metal: 'gold', movement: 'Quartz', movementShort: 'Quartz',
      bracelet: 'Leather strap', era: 'Older production; pre-owned',
      size: { shape: 'round', w: 26, l2l: 31, approx: true },
      draw: { style: 'round', bezelW: .16, bracelet: 'leather', strap: 'black', bw: .5, dial: '#17181C', markers: 'stick', ink: '#CFAA61', hands: '#CFAA61' },
      price: { preLow: 2100, preHigh: 4400, sources: 'Gray & Sons sold listings, Chrono24 asking prices and 1stDibs' },
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'At 26 mm with short lugs it sits small and round, like a gold coin on a strap. The 33 mm version is the bolder, more masculine option and still inside your band.',
        budgetNote: 'I first showed $1,700–2,500, which is what dealers sold these for a year or more ago. Today’s asking prices run about $2,100–4,400 for the 26 mm, and $5,400 and up for the 33 mm.'
      },
      why: [
        'It is the only solid-gold watch here that is quartz and in budget.',
        'The design is based on a Roman coin, with the name running around the rim like an inscription. Small, graphic and unmistakably deliberate.'
      ],
      honest: [
        'Crystal, water resistance and thickness could not be confirmed. Ask the seller for all three.',
        'Solid gold is soft. It will pick up dents and scratches far more easily than steel.',
        'The logo is the design. If a name on your wrist bothers you, this is not your watch.',
        'Listings mix quartz and automatic versions under similar references. Confirm which it is.'
      ],
      style: {
        cuff: 'Small and low, so it tucks under a cuff with a gold rim showing.',
        stack: 'Yellow gold on leather beside thin gold chains works. Wear it with the chains on the same wrist: it reads as one warm group.',
        looks: [
          ['Boardroom', 'Black cashmere, wide-legs, mules, hoops. Black dial, black knit, gold rim: very little, very intentional.'],
          ['Evening', 'Black zip dress, red booties. The gold bezel and the red shoe are the only two colours.']
        ],
        read: 'Bold in outline, small in scale. Keep everything around it quiet.'
      },
      links: [photos('Bulgari Bulgari BB 26 GL gold watch wrist'), listings('Bulgari Bulgari BB 26 GL')]
    },
    {
      id: 'must-vermeil', brand: 'Cartier', name: 'Must de Cartier Tank', variant: 'Vintage · gold vermeil',
      pitch: 'The all-gold Tank look for a third of the price. Seventies Paris. Also the most fragile watch on this list.',
      refs: ['590005', '681006', '366001 (small, about 21 mm)'], metal: 'vermeil', movement: 'Quartz (older Cartier calibres)', movementShort: 'Quartz',
      crystal: 'Mineral glass', wr: 'None', bracelet: 'Leather strap', era: 'About 1977–1990s; pre-owned only',
      size: { shape: 'rect', w: 23.5, l2l: 30.5, thick: 6 },
      draw: { style: 'tank', bracelet: 'leather', strap: 'burgundy', bw: .7, markers: 'roman', hands: BLUE, cabochon: true, dial: CREAM },
      price: { preLow: 1500, preHigh: 3500, sources: 'Chrono24, eBay and vintage dealer listings' },
      flag: 'Fragile',
      verdict: {
        fit: 'yes', budget: 'yes',
        fitNote: 'A lovely size on you: 23.5 × 30.5 mm and only 6 mm thick.',
        budgetNote: 'About $1,500–3,500 depending on dial and condition. Budget around $400 more if the plating needs redoing.'
      },
      why: [
        'It is the closest thing here to your Timex in spirit: a small, gold-coloured, inexpensive watch with a famous shape.',
        'It is on the list so you can make the call with the facts, because on durability it is the opposite of what you asked for.'
      ],
      honest: [
        'It is gold plate over silver, not solid gold. The plating wears through at the edges.',
        'Mineral glass scratches, and there is no water resistance at all. Hand-washing counts.',
        'The movements are 30–45 years old. They do fail, and a leaked battery can destroy one.',
        'Heavily faked. The case should be stamped as silver, with a signed back carrying a reference and serial number.',
        'If the Timex dying after nine months hurt, this one could hurt again.',
        'Specialist dealers sell serviced, re-plated examples with a one-year warranty. That removes most of the risk, though not the lack of water resistance.',
        'Some are hand-wound, not quartz. Those have no old quartz circuit to fail.'
      ],
      style: {
        cuff: 'Thin and flat; a natural under a cuff.',
        stack: 'All yellow gold on leather: it joins your chains without a seam. This is the only watch here that keeps your whole wrist one colour.',
        looks: [
          ['Boardroom', 'Gray plaid dress, pearls, hoops. Everything small and gold, as you wear it now.'],
          ['Evening', 'Black zip dress, burgundy strap, red booties. The strap and the shoe pick each other up.']
        ],
        read: 'Seventies Paris at a third of the price. Handle it like jewelry.'
      },
      links: [photos('Must de Cartier Tank vermeil 590005 wrist'), listings('Cartier Must Tank vermeil')]
    },
    {
      id: 'omega-vintage', brand: 'Omega', name: 'Seamaster De Ville', variant: 'Vintage · solid gold',
      pitch: 'An actual man’s dress watch from the 1960s, in solid gold, at a size that might make it yours. The wild card.',
      refs: ['Seamaster De Ville 14k or 18k', 'Genève 18k (refs 111.0144, 135.070)'], metal: 'gold', movement: 'Automatic or hand-wound', movementShort: 'Mechanical',
      crystal: 'Likely acrylic', wr: 'None in practice', bracelet: 'Leather strap', era: '1960s; vintage only',
      size: { shape: 'round', w: 34, l2l: 41, approx: true },
      draw: { style: 'round', bezelW: .05, bracelet: 'leather', strap: 'brown', bw: .53, dial: CHAMP, markers: 'stick', ink: '#6E5222', hands: '#6E5222', date: true },
      price: { preLow: 1300, preHigh: 4500, sources: '1stDibs, Analog:Shift and vintage dealer listings' },
      flag: 'Fragile',
      verdict: {
        fit: 'edge', budget: 'yes',
        fitNote: 'The top of your band. At 34 mm with long lugs it will span about 41 mm, right on your line. This is the one watch here you must try on before buying; it could read as borrowed.',
        budgetNote: '14k examples run about $1,300–2,500 and 18k about $2,200–4,500.'
      },
      why: [
        'You like men’s watches. A 1960s 34 mm dress watch is what men wore before watches got big, and it is the classic way a small woman wears a man’s watch.',
        'Solid gold, for less than a steel Cartier.'
      ],
      honest: [
        'Mechanical, sixty years old, and not water-resistant. Dealers rarely pressure-test them.',
        'Many listings are gold-filled or gold-capped, not solid gold. Check the case stamps.',
        'Plan on a service every 5–8 years. Guides put it at $600–950, with independents charging less.',
        'On durability this is the weakest choice on the list, alongside the vermeil Tank.',
        'Top-to-bottom size varies by reference and was not confirmed. Ask for the lug-to-lug measurement.'
      ],
      style: {
        cuff: 'Thin for its width, so it slides under a cuff. On your wrist it will fill the space a cuff leaves.',
        stack: 'Gold on leather sits happily beside your chains, but at this size keep it to the eye chain alone.',
        looks: [
          ['Boardroom', 'Koché shirt dress, mules. A man’s watch with a man’s shirt, on a woman with pearls. Wear the sleeve one fold up so it looks chosen.'],
          ['Weekend', 'Cashmere, brown wide-legs, brown strap. Warm on warm on warm.']
        ],
        read: 'Your grandfather’s watch, if he had excellent taste. Chosen, as long as it fits.'
      },
      links: [photos('vintage Omega Seamaster De Ville 34mm solid gold wrist'), listings('Omega Seamaster De Ville gold 34mm')]
    },
    {
      id: 'snowflake', brand: 'Grand Seiko', name: 'The Snowflake', variant: 'SBGA211 · titanium',
      pitch: 'The one you wanted. It is here so you can see, to scale, why it isn’t the one.',
      refs: ['SBGA211'], metal: 'titanium', movement: 'Spring Drive (9R65)', movementShort: 'Spring Drive',
      crystal: 'Sapphire', wr: '100 m', bracelet: 'Titanium', era: 'In production',
      size: { shape: 'round', w: 41, l2l: 49, thick: 12.5 },
      draw: { style: 'round', bracelet: 'oyster', bw: .49, dial: '#F7F8FA', texture: 'snow', markers: 'stick', seconds: '#3B6FB5', date: true },
      price: { text: '$6,000+', sub: 'new · not re-checked' },
      verdict: {
        fit: 'no', budget: 'no',
        fitNote: 'It spans about 49 mm against a wrist about 56 mm across. The lugs reach almost edge to edge, and at 12.5 mm thick it will not go under a cuff.',
        budgetNote: 'Above $5,000 new, and I did not re-check its current price. Grand Seiko also makes the same white dial in quartz at 37 mm (SBGX355, $4,100), which is closer but still spans 44.6 mm.'
      },
      why: [
        'It is one of the best dials made, and titanium keeps it light. Nothing about wanting it was wrong.',
        'The small Snowflake (STGF359) earlier in this list carries the same dial at 28.9 mm.'
      ],
      honest: [
        'On your wrist it is the “borrowed from Dad” watch you said you didn’t want.',
        'Spring Drive is superb, and costs more to service than quartz.'
      ],
      style: {
        cuff: 'It will not fit under one. If you wore it, you would wear it like a borrowed blazer: on purpose, sleeves pushed up, nothing else on that arm.',
        read: 'Beautiful, and borrowed.'
      },
      links: [photos('Grand Seiko SBGA211 Snowflake small wrist'), ['Grand Seiko', 'https://www.grand-seiko.com/us-en/collections/sbga211g']]
    }
  ];
})();
