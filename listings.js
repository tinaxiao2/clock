/* Places to buy: a dated snapshot, keyed by watch id. The first item for a watch is the one to try first.
   verified: 'opened' = the seller's page was loaded on the date below and the price and stock read from it;
             'search' = seen in search results only (the site refuses automated visits or is not reachable from here).
   status is only set to in_stock / pre_order / out_of_stock / for_sale when the page was opened. */
(function () {
  var E = 'eBay';
  window.LISTINGS = {
    asOf: '20 November 2026',
    byId: {
      'f-la670': {
        summary: 'Casio’s own US store lists both colours at $54.95. Casio’s site refuses automated visits, so I could not confirm stock there. Abt is cheaper but is only taking pre-orders.',
        items: [
          { seller: 'Casio US', title: 'LA670WGA-1 · gold, black face', price: 54.95, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/product.LA670WGA-1/', note: 'Brand store. A search snapshot showed it in stock.' },
          { seller: 'Casio US', title: 'LA670WGA-9 · gold, gold face', price: 54.95, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/product.LA670WGA-9/', note: 'Same price. No stock information surfaced.' },
          { seller: 'Abt', title: 'LA670WGA-1 · gold, black face', price: 42.95, status: 'pre_order', verified: 'opened', url: 'https://www.abt.com/Casio-Vintage-Watch-24.6mm-in-Gold-Tone-LA670WGA1/p/223608.html', note: 'Lowest price found, but listed as a pre-order, not in stock.' }
        ]
      },
      'f-gucci-bangle': {
        summary: 'Nothing under $500 could be confirmed: eBay refuses automated visits, so these are leads to open yourself. Check the inside size first. The one dealer example I could open has a 6-inch bangle, smaller than your 6¼-inch wrist.',
        items: [
          { seller: E, title: 'Gucci 1100-L · six coloured rings · “Working”', price: 478, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/236711576212', note: 'The fullest set found under $500. Or best offer.', caution: 'Ask which six colours, the inside size of the bangle, edge wear and returns. Shipping could take it past $500.' },
          { seller: E, title: 'Gucci 1100-L · orange ring · “works properly”', price: 329.99, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/128116558715', note: 'Cheaper because it seems to come with only one or two rings.', caution: 'Ring count unconfirmed. Ask about the battery, inside size and returns.' },
          { seller: 'The Watch Preserve', title: 'Gucci 11/12.2 bangle · running', price: 800, status: 'for_sale', verified: 'opened', url: 'https://thewatchpreserve.com/products/vintage-gucci-interchangeable-bezel-bangle-11-12-2', note: 'A dealer-checked example for reference: running, 26 mm, hairline scratches.', caution: 'Over your $500 ceiling, and its 6-inch bangle is smaller than your wrist.' }
        ]
      },
      'f-ring': {
        summary: 'Casio US lists the gold ring at $155; its site could not be opened to confirm stock. The ring is a US 10.5 (20 mm inside), with spacers for about US 9.5 and US 8.',
        items: [
          { seller: 'Casio US', title: 'CRW-001G-9 · gold', price: 155, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/casio-ring-watch/crw-001g/', note: 'Brand store. The search snapshot showed a Buy Now button.' },
          { seller: 'Moda3', title: 'CRW-001G-9 · gold', price: 155, status: 'unknown', verified: 'search', url: 'https://moda3.com/products/casio-crw001g-9-ring-watch-gold', note: 'Independent US shop. A search snapshot showed one in stock.' },
          { seller: 'StockX', title: 'CRW-001G-9JR · gold (Japan reference)', price: 169, status: 'unknown', verified: 'search', url: 'https://stockx.com/casio-gold-ring-watch-crw-001g-9jr-gold', note: 'Resale marketplace.', caution: 'Fees and shipping are added at checkout.' }
        ]
      },
      'f-bianca': {
        summary: 'Citizen’s own store has it on sale at $380, and lets you choose a 6¼-inch band at checkout so it arrives sized for you.',
        items: [
          { seller: 'Citizen US', title: 'EW5602-57D · gold-tone bracelet', price: 380, status: 'in_stock', verified: 'opened', url: 'https://www.citizenwatch.com/us/en/product/EW5602-57D', note: 'On sale from $475. The band-size menu includes 6¼″.' },
          { seller: 'Citizen US', title: 'EW5622-09P · same watch on leather', price: 360, status: 'in_stock', verified: 'opened', url: 'https://www.citizenwatch.com/us/en/product/EW5622-09P', note: 'On sale from $450.' },
          { seller: 'Abt', title: 'EW5602-57D · gold-tone bracelet', price: 475, status: 'in_stock', verified: 'opened', url: 'https://www.abt.com/Citizen-Watch-Bianca-21.5mm-with-White-Mother-Of-Pearl-Dial-EW560257D/p/203683.html', note: 'Full price.' },
          { seller: 'Zales', title: 'EW5602-57D · gold-tone bracelet', price: 337.5, status: 'unknown', verified: 'search', url: 'https://www.zales.com/ladies-citizen-l-bianca-watch-gold-tone-stainless-steel-model-ew560257d/p/V-20579668', note: 'Lowest price seen.', caution: 'From a search snapshot; the sale may have ended.' }
        ]
      },
      'f-teeny': {
        summary: 'In stock at Timex: $179 in gold-tone, $169 in steel. That is $20 more than the search results suggested last round.',
        items: [
          { seller: 'Timex US', title: 'TW2Y46600 · gold-tone', price: 179, status: 'in_stock', verified: 'opened', url: 'https://timex.com/products/teeny-tiny-timex-endorsed-by-dimepiece-20mm-stainless-steel-expansion-band-watch-with-perfect-fit-tw2y46600', note: 'Brand store, one-year warranty.' },
          { seller: 'Timex US', title: 'TW2Y46500 · steel', price: 169, status: 'in_stock', verified: 'opened', url: 'https://timex.com/products/teeny-tiny-timex-endorsed-by-dimepiece-20mm-stainless-steel-expansion-band-watch-with-perfect-fit-tw2y46500', note: 'Steel cannot lose a gold finish.' },
          { seller: 'Watches of Switzerland', title: 'TW2Y46600 · gold-tone', price: 179, status: 'unknown', verified: 'search', url: 'https://www.watchesofswitzerland.com/products/timex-timex-80-tw2y46600vq-17160574' }
        ],
        extra: {
          title: 'Reviving the one you have',
          lines: [
            'Timex’s warranty runs one year from the purchase date and covers manufacturing defects. You need the receipt, and the watch must have come from an authorised seller.',
            'The battery, band, crystal and case are excluded. So try a new battery first; any watch-repair counter can fit one.',
            'If a new battery does not fix it, claim before the one-year mark. On timex.com open “Watch Repair Request”, create a request, print the form, and post the watch with the form and a copy of the receipt.',
            'In-warranty repairs are free apart from a handling fee. Search results put that at about $8, and a Timex battery change at $18; I could not confirm those amounts on Timex’s own pages.'
          ]
        }
      },
      'f-nixon': {
        summary: 'In stock at Nixon’s own store at $150.',
        items: [
          { seller: 'Nixon US', title: 'Small Time Teller · All Gold · A399-502-00', price: 150, status: 'in_stock', verified: 'opened', url: 'https://www.nixon.com/products/small-time-teller-all-gold', note: 'Brand store.' },
          { seller: 'BoxLunch', title: 'Small Time Teller · All Gold', price: 150.9, status: 'unknown', verified: 'search', url: 'https://www.boxlunch.com/product/nixon-small-time-teller-all-gold-watch/17667363.html' },
          { seller: 'Tillys', title: 'Small Time Teller · gold', price: 150, status: 'unknown', verified: 'search', url: 'https://www.tillys.com/product/nixon-small-time-teller-womens-watch/46233562101.html', caution: 'The search snapshot is more than two years old.' }
        ]
      },
      'f-la20': {
        summary: 'Casio US no longer sells the pink one, so pink comes from marketplace sellers. Black is on Casio US at $29.95.',
        items: [
          { seller: 'Walmart', title: 'LA-20WH-4A1 · pink', price: 32.95, status: 'unknown', verified: 'search', url: 'https://www.walmart.com/ip/Casio-Women-s-Digital-Casual-Watch-Pink-White-LA20WH-4A1/56223074', caution: 'May be a third-party seller. Check who ships it.' },
          { seller: 'Best Buy', title: 'LA-20WH-4A1 · pink', price: 37.11, status: 'unknown', verified: 'search', url: 'https://www.bestbuy.com/product/casio-youth-digital-quartz-la-20wh-4a1-womens-watch-pink/CXZY4SV4ZP', caution: 'May be a third-party marketplace seller.' },
          { seller: 'Casio US', title: 'LA-20WH-1A · black', price: 29.95, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/product.LA-20WH-1A/', note: 'Brand store, black only.' }
        ]
      },
      'f-seiko-tank': {
        summary: 'Seiko’s own US store no longer lists it, and neither do two dealers that carried it. It looks discontinued, so what is left is old stock at discount sellers I could not open.',
        items: [
          { seller: 'Timepiece.com', title: 'SWR054 · white dial, black strap', price: 140.97, status: 'unknown', verified: 'search', url: 'https://timepiece.com/seiko-quartz-ladies-watch-swr054.html', note: 'Lowest price seen. A search snapshot said in stock.', caution: 'A discount seller I could not vet. Ask whether the Seiko warranty applies.' },
          { seller: 'Espling Jewelers', title: 'SWR054', price: 172, status: 'unknown', verified: 'search', url: 'https://www.esplingjewelers.com/products/ladys-yellow-seiko-watch-new-swr054', note: 'A search snapshot showed one left.' }
        ]
      },
      'f-rw-tank': {
        summary: 'No listing is good enough today: none states a fresh battery or accepts returns, and asking prices ($330–450) are higher than the range I gave you. Treat these as leads to question, not to buy as they stand.',
        items: [
          { seller: E, title: 'Raymond Weil 5767 · 23 mm · “Working”', price: 399, shipping: '+ $30 shipping', status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/147619207294', note: 'Black leather strap. Or best offer.', caution: 'Strap and clasp are worn. Ask for the battery date, a photo of the battery compartment and returns.' },
          { seller: E, title: 'Raymond Weil 5767 · rectangular', price: 449.99, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/147641537498', caution: 'The band is cracking and the listing does not say whether it runs. Shipping could take it past $500.' }
        ]
      },
      'f-la680': {
        summary: 'Casio US lists the new mesh version at $99.95 and the link-band version at $69.95; its site could not be opened to confirm stock.',
        items: [
          { seller: 'Casio US', title: 'LA680WEMG-9A · gold mesh', price: 99.95, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/product.LA680WEMG-9A/', note: 'Brand store. Press reports say it went on sale there in late October.' },
          { seller: 'Casio US', title: 'LA680WGA-9 · gold link band', price: 69.95, status: 'unknown', verified: 'search', url: 'https://www.casio.com/us/watches/casio/product.LA680WGA-9/' },
          { seller: 'Drifthouse', title: 'LA680WEMG-9A · gold mesh', price: 99.95, status: 'unknown', verified: 'search', url: 'https://www.drifthouse.com/products/casio-vintage-la680wemg-9a-gold', note: 'Independent shop. A search snapshot showed it in stock.' }
        ]
      },
      'f-swatch': {
        summary: 'Both are in stock at Swatch US at $75.',
        items: [
          { seller: 'Swatch US', title: 'LE108 “The Gold Within You” · clear case, blue dial', price: 75, status: 'in_stock', verified: 'opened', url: 'https://www.swatch.com/en-us/the-gold-within-you-le108/LE108.html', note: 'Despite the name, the dial is blue.' },
          { seller: 'Swatch US', title: 'LB170E “Lady Black Single” · black', price: 75, status: 'in_stock', verified: 'opened', url: 'https://www.swatch.com/en-us/lady-black-single-lb170e/LB170E.html' }
        ]
      },
      'f-lovely-square': {
        summary: 'In stock at Tissot US at $450. Abt lists the same price but only as a pre-order.',
        items: [
          { seller: 'Tissot US', title: 'T058.109.33.031.00 · yellow-gold PVD', price: 450, status: 'in_stock', verified: 'opened', url: 'https://www.tissotwatches.com/en-us/T0581093303100.html', note: 'Brand store.' },
          { seller: 'Abt', title: 'T058.109.33.031.00 · yellow-gold PVD', price: 450, status: 'pre_order', verified: 'opened', url: 'https://www.abt.com/Tissot-Lovely-Square-Silver-Dial-Gold-Tone-Stainless-Steel-Bracelet-Watch-20mm-T0581093303100/p/136092.html', note: 'Listed as a pre-order, not in stock.' },
          { seller: 'WatchMaxx', title: 'T058.109.33.031.00', price: 337.5, status: 'unknown', verified: 'search', url: 'https://www.watchmaxx.com/tissot-watch-t058-109-33-031-00', note: 'Lowest price seen.', caution: 'A discount reseller: the Tissot warranty may not apply.' }
        ]
      },
      'f-cavatina': {
        summary: 'The gold-tone one is out of stock at Timex itself. The two-tone version is in stock there at the same price, and Watches of Switzerland lists the gold-tone, unconfirmed.',
        items: [
          { seller: 'Watches of Switzerland', title: 'TW2Y47400 · gold-tone, cream dial', price: 139, status: 'unknown', verified: 'search', url: 'https://www.watchesofswitzerland.com/products/timex-cavatina-tw2y47400vq-17160506', note: 'The one you picked. Stock not shown in the search snapshot.' },
          { seller: 'Timex US', title: 'TW2Y66900 · two-tone band', price: 139, status: 'in_stock', verified: 'opened', url: 'https://timex.com/products/cavatina-mini-17mm-stainless-steel-expansion-band-watch-tw2y66900', note: 'The same watch with a steel-and-gold band.' },
          { seller: 'Timex US', title: 'TW2Y47400 · gold-tone, cream dial', price: 139, status: 'out_of_stock', verified: 'opened', url: 'https://timex.com/products/cavatina-mini-17mm-stainless-steel-expansion-band-watch-tw2y47400', note: 'Out of stock today.' }
        ]
      },
      'f-lip-t18': {
        summary: 'Lip’s own shop has it in stock at €199 but delivers only within the EU. For US delivery the lead is Tempus Shop at $190, which I could not open to confirm.',
        items: [
          { seller: 'Tempus Shop', title: 'Churchill T18 671006 · gold dial, brown strap', price: 190, status: 'unknown', verified: 'search', url: 'https://tempusshop.com/en-us/products/lip-t18', note: 'Priced in dollars. A search snapshot showed it in stock.', caution: 'I could not vet the seller or where it ships from. Check for import fees.' },
          { seller: 'Lip (France)', title: 'Churchill T18 671006 · gold dial, brown strap', price: 199, currency: 'EUR', status: 'in_stock', verified: 'opened', url: 'https://lip.fr/en/churchill/58-lip-churchill-t18-671006', note: 'Brand store, two-year warranty. Useful if you have an EU address or are travelling.', caution: 'Delivers only to France, Monaco and EU countries.' },
          { seller: E, title: 'Churchill T18 671006', price: 203.15, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/267376233615', note: 'The price includes shipping, per the search snapshot.' }
        ]
      },
      'f-lassale': {
        summary: 'Two eBay leads say they have new batteries, but both are smaller than I described: 16–17 mm wide. The dealer I could open has sold all of its Lassales, at $150–200 each.',
        items: [
          { seller: E, title: 'Seiko gold-tone tank · 1989 · 17 mm', price: 169, shipping: '+ $5.99 shipping', status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/117468289812', note: 'New battery fitted 14 October 2026. 17 mm wide, 4 mm thick. Or best offer.', caution: 'A Seiko tank from the same years, not a Lassale. Minor crystal scratches. Ask about returns.' },
          { seller: E, title: 'Seiko Lassale · 1982 · 16 mm · “Running”', price: 189, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/117290161139', note: 'A true Lassale with a new battery. The band fits wrists up to about 7.1 inches.', caution: 'Ask how small the band adjusts; your wrist is 6¼ inches. Returns unknown.' },
          { seller: 'Etsy', title: 'Seiko Lassale ultra-thin tank · champagne dial', price: 308.6, status: 'unknown', verified: 'search', url: 'https://www.etsy.com/listing/4476806203/vintage-seiko-lassale-ultra-thin-gold', note: 'New battery, on a replacement black strap.', caution: 'Case width not given, and it costs more than a dealer charges.' }
        ]
      },
      'f-casio-tank': {
        summary: 'Casio does not sell this model in the US, so it comes from marketplace sellers at about $50–60.',
        items: [
          { seller: E, title: 'LTP-V007G-9B · Roman dial · new', price: 49.99, shipping: 'free shipping', status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/195731839666', caution: 'The search snapshot is a few months old.' },
          { seller: 'Walmart (seller: Direct Time)', title: 'LTP-V007G-9B · Roman dial', price: 59.95, shipping: 'free shipping', status: 'unknown', verified: 'search', url: 'https://www.walmart.com/ip/466049859', note: 'A 45-day return window, per the snapshot.', caution: 'Sold by a third party, not Walmart.' },
          { seller: 'StockX', title: 'LTP-V007G-9E · plain dial', price: 65, status: 'unknown', verified: 'search', url: 'https://stockx.com/casio-g-shock-ltp-v007g-9e-gold', caution: 'Resale marketplace; fees are added at checkout.' }
        ]
      },
      'f-chaika': {
        summary: 'A specialist shop has three serviced Chaikas in stock with a money-back guarantee, at $80–170, but none is the plain gold-plated round one on this card. The only gold-plated lead is an eBay listing I could not open.',
        items: [
          { seller: E, title: 'Chaika 1601A · gold-plated · “serviced”', price: 29.99, shipping: '+ $19.99 shipping', status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/168294480362', note: 'The only lead described as gold-plated. Or best offer.', caution: 'Seller, size and plating wear unknown. Ask for close-ups of the case edges.' },
          { seller: 'Soviet Watch Store', title: 'Chaika 1601A · white oval dial, steel bracelet', price: 79.95, shipping: '+ $9.95 shipping', status: 'for_sale', verified: 'opened', returns: 'Money-back guarantee', url: 'https://sovietwatchstore.com/product/chaika-vintage-wristwatch-for-ladies/', note: 'Serviced before shipping. 18 × 20 mm, 7.5 mm thick. One in stock.', caution: 'Steel, not gold. Ships from Ukraine; 5% US duty is collected at checkout.' },
          { seller: 'Soviet Watch Store', title: 'Chaika 1601A · covered dial on a ceramic bracelet', price: 134.95, shipping: 'free shipping', status: 'for_sale', verified: 'opened', returns: 'Money-back guarantee', url: 'https://sovietwatchstore.com/product/chaika-vintage-wristwatch-for-ladies-with-stone-bracelet-2/', note: 'A watch hidden under a hinged cover. Serviced. 20 × 22 mm. A champagne-dial twin is $169.95.', caution: 'Thick at 13.5 mm, and the listing does not say it is gold-plated.' }
        ]
      }
    }
  };
})();

/* ---- The Main Watch shortlist ---- */
(function () {
  var D1 = 'https://www.1stdibs.com/jewelry/watches/wrist-watches/';
  var WP = 'https://thewatchpreserve.com/products/', GA = 'https://shop.gauthierwatches.com/products/';
  var M = {
    'gs-stgf359': {
      summary: 'Buy it new. Two dealers list it new at $2,600, and the one used example I could open costs more than that.',
      items: [
        { seller: 'Exquisite Timepieces', title: 'STGF359 · new', price: 2600, status: 'in_stock', verified: 'opened', tags: ['New'], url: 'https://www.exquisitetimepieces.com/products/grand-seiko-stgf359-snowflake', note: 'New stock from a Grand Seiko dealer. Search results mention the five-year Grand Seiko warranty; confirm it at checkout.' },
        { seller: 'The 1916 Company', title: 'STGF359 · new', price: 2600, status: 'for_sale', verified: 'opened', tags: ['New'], url: 'https://www.the1916company.com/watches/grand-seiko/heritage/stgf359/', note: 'Listed at $2,600. You inquire to buy; there is no cart button.' },
        { seller: 'Bob’s Watches', title: 'STGF359 · pre-owned', price: 2695, status: 'in_stock', verified: 'opened', tags: ['Pre-owned'], url: 'https://www.bobswatches.com/grand-seiko/used-ladies-grand-seiko-heritage-collection-ref-stgf359-white-dial.html', note: 'A 2024 example with box and papers, per the search listing.', caution: 'Costs $95 more than a new one.' },
        { seller: 'Longs Jewelers', title: 'STGF359 · new', price: 2500, status: 'unknown', verified: 'search', tags: ['New'], url: 'https://www.longsjewelers.com/products/grand-seiko-ladies-stgf359-lbws0226', note: 'The lowest new price seen.', caution: 'From a search snapshot. $100 under list is unusual for Grand Seiko, so confirm.' },
        { seller: 'Chrono24 (Japan)', title: 'STGF359 · like new, box and papers', price: 2202, status: 'unknown', verified: 'search', url: 'https://www.chrono24.com/grandseiko/grand-seiko-heritage-collection-stainless-steel-stgf359--id19836224.htm', caution: 'Ships from Japan: add duty and shipping, and the warranty may be Japan-only.' }
      ]
    },
    'must-vermeil': {
      summary: 'The strongest listings on your shortlist. A Must de Cartier specialist has a quartz one, fully serviced and freshly re-plated, at $2,700 with a one-year warranty. That answers most of this watch’s weaknesses. Three other leads had already sold when I opened them, so these move.',
      items: [
        { seller: 'Gauthier', title: '1980s Must Tank · quartz · large · yellow Roman dial', price: 2700, status: 'in_stock', verified: 'opened', tags: ['1980s', 'Serviced', '1-year warranty', '23 × 30 mm'], returns: 'Returns accepted', url: GA + '1980s-vintage-cartier-must-de-tank-quartz-vermeil-large-model-ref-881008-yellow-lemon-dial-copy', note: 'Fully serviced quartz movement. The case has been re-plated in 18k gold, so there is no wear-through. Free insured US shipping.', caution: 'Re-plating means it is not all original. That matters to collectors, not to wearing it. Returns may carry a restocking fee.' },
        { seller: 'Analog:Shift', title: '1980s Must Tank · hand-wound · black dial', price: 2495, status: 'in_stock', verified: 'opened', tags: ['1980s', 'Hand-wound', '2-year warranty', '24 mm'], url: 'https://www.analogshift.com/products/cartier-must-de-cartier-tank-as12310', note: 'Gold-plated case in excellent condition with minimal oxidation, per the dealer. A burgundy-dial twin is the same price.', caution: 'Mechanical, so you wind it each day. In return there is no forty-year-old quartz circuit to fail.' },
        { seller: 'Gauthier', title: '1970s Must Tank · hand-wound · large · yellow dial', price: 3050, status: 'in_stock', verified: 'opened', tags: ['1970s', 'Hand-wound', '1-year warranty'], returns: 'Returns accepted', url: GA + '1970s-vintage-vermeil-cartier-must-de-tank-vermeil-large-model-yellow-lemon-dial-with-box-and-cartier-strap-copy', note: 'One of about ten Must Tanks this dealer has in stock at $2,700–3,050, small and large.' },
        { seller: 'The Watch Preserve', title: 'Must Tank 2413 · quartz · date', price: 3200, status: 'in_stock', verified: 'opened', tags: ['Quartz', '30 × 34 mm'], returns: '7-day returns', url: WP + 'vintage-must-de-cartier-tank-2414', note: 'A later, larger Must with a date window. Running and keeping time.', caution: 'Bigger than the one on this card, and no warranty is stated.' }
      ]
    },
    'lady-datejust': {
      summary: 'Under $5,000 every example has a catch, and the dealer states each one plainly. The cleanest is $4,700 with a badly stretched bracelet. Cleaner ones cost more: one dealer just sold a 1987 example at $5,315, and Bob’s Watches has seven from $6,495.',
      items: [
        { seller: 'The Watch Preserve', title: 'Rolex 69173 · 1986 · champagne dial, fluted bezel', price: 4700, status: 'in_stock', verified: 'opened', tags: ['1986', 'Running −2 s/day', 'Bracelet 6.5″'], returns: '7-day returns', url: WP + 'vintage-rolex-datejust-69174', note: 'Stick-marker champagne dial with no aftermarket note, and the 18k fluted bezel. The bracelet fits a 6.5-inch wrist.', caution: 'The dealer calls the bracelet stretch “severe”. Budget for a repair or ask for a discount. No box, papers or warranty mentioned.' },
        { seller: 'The Watch Preserve', title: 'Rolex 69173 · 1985 · champagne dial', price: 3900, status: 'in_stock', verified: 'opened', tags: ['1985', 'Running +3 s/day'], returns: '7-day returns', url: WP + 'vintage-rolex-oyster-perpetual-datejust-69174', caution: 'The dealer states the dial is aftermarket and not centred, and the bracelet has some stretch.' },
        { seller: 'The Watch Preserve', title: 'Rolex 69173 · 1987 · gold dial, on leather', price: 3000, status: 'in_stock', verified: 'opened', tags: ['1987', 'Running +3 s/day'], returns: '7-day returns', url: WP + 'vintage-rolex-oyster-perpetual-datejust-69173', caution: 'Diamond markers were added to a spotted dial, and it comes on a crocodile strap with no Rolex bracelet.' },
        { seller: 'Bob’s Watches', title: 'Rolex 69173 · champagne dial · seven in stock', price: 6495, status: 'in_stock', verified: 'opened', url: 'https://www.bobswatches.com/rolex/lady_datejust-69173-champagne', note: 'The specialist dealer. Seven examples at $6,495–6,695.', caution: 'Over your $5,000 ceiling.' }
      ]
    },
    'tank-must': {
      summary: 'New from Cartier at $3,900 is still the buy. The dealers I can open have sold their pre-owned ones, which went for $2,700–3,250 with box and papers. The one unused example in stock is only $150 less than new, with a black dial and no box or papers.',
      items: [
        { seller: 'Cartier US', title: 'WSTA0136 · large, steel, black strap · new', price: 3900, status: 'unknown', verified: 'search', tags: ['New'], url: 'https://www.cartier.com/en-us/watches/collections/tank/tank-must-de-cartier-watch-CRWSTA0136.html', note: 'Search results showed it as “unavailable online”, which means buying through a boutique or by phone.', caution: 'Cartier’s site is not reachable from here, so stock is unconfirmed.' },
        { seller: 'Gray & Sons', title: 'Tank Must large WSTA0108 · black dial · unused', price: 3750, status: 'in_stock', verified: 'opened', tags: ['Unused', '12-month dealer warranty', 'No box or papers', '25.5 × 33.7 mm'], url: 'https://www.grayandsons.com/w530617-unused-cartier-tank-tank-must-large-m/', note: 'Black dial on a black alligator strap. The dealer takes offers.', caution: 'Only $150 less than new, with a dealer warranty in place of Cartier’s. Not the white Roman dial on this card.' },
        { seller: 'eBay', title: 'WSTA0041 · 2023 · box and warranty card', price: 3150, status: 'unknown', verified: 'search', tags: ['2023', 'Box & papers'], url: 'https://www.ebay.com/itm/147651462999', note: 'The previous reference of the same watch, with matching box and card per the listing.', caution: 'Seller and feedback unknown. Confirm it is not the solar version.' },
        { seller: 'Sheiban Jewelers', title: 'WSTA0136 · pre-owned', price: 3250, status: 'unknown', verified: 'search', tags: ['No box'], url: 'https://sheibanjewelers.com/products/pre-owned-cartier-tank-must-large-wsta0136', caution: 'No box; papers, condition and stock unknown. A $650 saving on new.' }
      ]
    },
    'panthere-steel': {
      summary: 'No small steel Panthère under $5,000 could be confirmed today. Bob’s Watches lists five, all out of stock, last priced at $4,295–5,495. 1stDibs sellers ask $6,000–6,800, more than the $5,300 a new one costs. The two in-budget prices are on sites I cannot open.',
      items: [
        { seller: 'eBay', title: 'WSPN0006 · pre-owned', price: 4517.86, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/136174513908', note: 'The best in-budget price found. The listing mentions a warranty dated 2024.', caution: 'Seller, location, box and papers unknown. Check feedback, returns and whether the Cartier card is included.' },
        { seller: 'WatchMaxx', title: 'WSPN0006', price: 4175, status: 'unknown', verified: 'search', url: 'https://www.watchmaxx.com/cartier-watch-wspn0006', note: 'Looks like a new, unworn watch from a discount reseller.', caution: 'The price may predate Cartier’s 2026 increase, and the warranty would be the store’s, not Cartier’s. Stock unknown.' },
        { seller: 'Cartier US', title: 'WSPN0006 · new', price: 5300, status: 'unknown', verified: 'search', tags: ['New'], url: 'https://cartier.com/en-us/watches/collections/panthere-de-cartier/panthere-de-cartier-watch-small-model-CRWSPN0006.html', note: 'The benchmark: new, with Cartier’s warranty.', caution: 'Just over your ceiling. Cartier’s site is not reachable from here.' },
        { seller: 'Bob’s Watches', title: 'Panthère W25033P5 · vintage small steel · 1996', price: 4795, status: 'in_stock', verified: 'opened', tags: ['1996', 'Box & papers', '22 mm'], url: 'https://www.bobswatches.com/cartier/pre-owned-cartier-panthere-ref-w25033p5-stainless-steel-small-model.html', note: 'The same shape from the original run, with box and papers.', caution: 'A thirty-year-old watch at nearly the price of a new one. Check the bracelet for stretch.' },
        { seller: '1stDibs', title: 'WSPN0006 · pre-owned', price: 5990, status: 'in_stock', verified: 'opened', url: D1 + 'cartier-ladies-stainless-steel-panthere-watch-wspn0006-4177/id-j_29032252/', caution: 'More than a new one costs. Shown so you recognise an overpriced listing.' }
      ]
    },
    'reverso': {
      summary: 'Nothing in steel and gold is confirmed for sale: every dealer listing I opened had sold, at $3,650–4,650 over the past two years. The one small quartz Reverso I could confirm is steel, at $5,200.',
      items: [
        { seller: 'Analog:Shift', title: 'Reverso · steel · quartz · 19 × 26 mm case', price: 5200, status: 'in_stock', verified: 'opened', tags: ['Quartz', 'Steel', '2-year warranty'], url: 'https://www.analogshift.com/products/jaeger-lecoultre-reverso-as12641', note: 'A plain closed back you could engrave. On an alligator strap with a steel buckle.', caution: 'Steel, not the steel-and-gold you kept, and $200 over your ceiling.' },
        { seller: 'Luxury Bazaar', title: 'Reverso Classic Small Q2618430 · steel · quartz', price: 5250, status: 'unknown', verified: 'search', tags: ['2018', 'Box & papers'], url: 'https://www.luxurybazaar.com/product/jaeger-lecoultre-reverso-classic-small-steel-watch-q2618430/', note: 'The newer small quartz model, 21 × 34 mm, with a two-year dealer warranty per the search listing.', caution: '$250 over your ceiling. A price tracker puts dealer prices nearer $4,700, so negotiate.' },
        { seller: 'eBay', title: 'Reverso 260.5.08 · steel & gold · quartz · 20 × 33 mm', price: null, status: 'unknown', verified: 'search', url: 'https://www.ebay.com/itm/267834603872', note: 'The exact reference you kept. Chrono24 dealers ask about $4,500–5,900 for it.', caution: 'Price, seller and returns unknown. Confirm it is quartz and ask for measurements.' }
      ]
    },
    'bulgari': {
      summary: 'No solid-gold 26 mm example is confirmed for sale, and the price on this card was too low. A dealer sold one at $2,500 a year ago; today’s leads ask $2,400–2,900 on sites I cannot open, and 1stDibs sellers want $5,400 and up for the 33 mm.',
      items: [
        { seller: 'Elite Fine Jewelers', title: 'BB 26 GL · 18k yellow gold · 26 mm · leather strap', price: null, status: 'unknown', verified: 'search', url: 'https://www.elitefinejewelers.com/products/bvlgari-bb-26-gl-26mm-18k-yellow-gold-leather-strap-watch', note: 'Search results show an ask of $2,395 or $2,895 for this one.', caution: 'Confirm it is quartz, the gold hallmarks, that it runs, and whether the buckle is gold.' },
        { seller: 'Chrono24', title: 'BB 26 GL · 18k · quartz', price: null, status: 'unknown', verified: 'search', url: 'https://chrono24.com/bulgari/bulgari-bb26gl-18k-womens-quartz-dress-watch--id29535488.htm', note: 'Asking prices for this reference on Chrono24 run about $2,100–4,400.', caution: 'Price, seller country and condition were not in the search snapshot.' },
        { seller: '1stDibs', title: 'Bulgari Bulgari 33 mm · 18k yellow gold · brown strap', price: 5400, status: 'in_stock', verified: 'opened', tags: ['c. 2000', 'Condition: fair'], url: D1 + 'bulgari-mens-33mm-watch-18k-yellow-gold-brown-leather-strap-ref-bb30-gi/id-j_30038702/', caution: 'Over budget, and the seller rates the condition as fair.' },
        { seller: 'Gray & Sons', title: 'Bulgari Bulgari 33 mm · steel', price: 2200, status: 'in_stock', verified: 'opened', tags: ['Steel'], url: 'https://www.grayandsons.com/w530254-bvlgari-bvlgari-33mm-bb33ss/', note: 'The same design in steel, from the dealer that sold the gold one.', caution: 'Steel, not gold.' }
      ]
    }
  };
  for (var k in M) window.LISTINGS.byId[k] = M[k];
})();

window.LISTINGS.byId['f-a168'] = {
  summary: 'Walmart lists it, but its site can’t be opened from here. The $11 price comes from a search snapshot and looks too low for this watch, so check the seller before you pay.',
  items: [
    { seller: 'Walmart', title: 'Casio A168WG-9UR · gold-tone', price: 11, status: 'unknown', verified: 'search', url: 'https://www.walmart.com/ip/Casio-Vintage-Retro-Gold-Digital-Dial-Stainless-Steel-Unisex-Watch-A168WG9UR/145219115', note: 'The link you sent.', caution: 'Check whether Walmart or a third-party seller ships it.' }
  ]
};
