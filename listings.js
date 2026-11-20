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
        summary: 'Nixon’s own store lists it at $150. Its page sits on an address this session cannot open yet, so stock is unconfirmed.',
        items: [
          { seller: 'Nixon US', title: 'Small Time Teller · All Gold · A399-502-00', price: 150, status: 'unknown', verified: 'search', url: 'https://nixon.com/products/small-time-teller-all-gold', note: 'Brand store. A search snapshot showed it in stock, with free shipping over $100.' },
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
        summary: 'Two US dealers that listed it last round have removed it, so it may be on its way out. Seiko’s own US store still showed it at $225 in search results.',
        items: [
          { seller: 'Seiko USA', title: 'SWR054 · white dial, black strap', price: 225, status: 'unknown', verified: 'search', url: 'https://seikousa.com/products/swr054/1000', note: 'Brand store.' },
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
