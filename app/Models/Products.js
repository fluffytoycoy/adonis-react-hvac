const Products = [
  {
    id: 1,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'fireplace',
    subType: 'wood',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Quadrafire/Pioneer%20II%20Wood%20Fireplace/Slides/Slide%201/-/media/images/fpl/product-images/fireplaces/qdf/pioneer-ii/qdf_pioneer-ii_woodfireplace_room-angled_960x456.jpg',
    details: {
      info: 'The Pioneer II is an energy-efficient heating powerhouse. This high-performance fireplace is also hassle-free and perfect for everyday use. Relax and savor long burn times, stunning flames and Quadra-Fire quality.',
      bulletPoints: [
        'Heat 1,000-2,600 sq ft with 74,900 BTUs, based on climate and home efficiency',
        'Low emission levels of 3.3 grams per hour, certified by the EPA',
        '2.7 cu ft firebox capacity / recommended 22” log length',
        'Up to 10 hours of burn time from each load of fuel'
      ]
    },
    models: [
      {
        name: 'QFP-42',
        manualSrc: 'https://downloads.hearthnhome.com/brochures/EPAWoodFireplaces_QDF-1067U.pdf',
        width: '42\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'38 x 20-7/8\"'
      }
    ]
  },
  {
    id: 2,
    name: 'Heat & Glo Foundation Pier Gas Fireplaces',
    category: 'fireplace',
    subType: 'gas',
    HeatingPower: 'low',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Foundation%20Pier%20Series%20Gas%20Fireplace/Slides/Slide%201-1/-/media/images/fpl/product-images/fireplaces/hng/foundation/fdn-pier_960x456.jpg',
    details: {
      info: 'A fireplace showpiece with a captivating presence. Modern in form and luxurious by design the FOUNDATION Series was created with profound consideration for the whole space, bringing everything seamlessly together. Let your distinctive spaces maintain their own character while you tastefully unite your overall design. A Foundations Series Pier fireplace brings your interior together. ',
      bulletPoints: [
        'Multiple interior options',
        'Available in 4’, 5’, 6’ and 7’ lengths in Single-Sided, See-Through, Bay, Pier',
        'Can be connected to home automation systems. Contact your home automation expert for information specific to your home.',
        'Big bold flames that elevate the senses'
      ]
    },
    models: [
      {
        name: 'FDN-4-PIER',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HNG-1162U_FOUNDATION_broc.pdf',
        width: '53-3/4\"',
        height: '50\"',
        depth:	'24\"',
        viewingArea:	'50-13/16x 24\"'
      },
      {
        name: 'FDN-5-PIER',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HNG-1162U_FOUNDATION_broc.pdf',
        width: '65-3/4\"',
        height: '50\"',
        depth:	'24\"',
        viewingArea:	'	62-13/16 x 24\"'
      },
      {
        name: 'FDN-6-PIER',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HNG-1162U_FOUNDATION_broc.pdf',
        width: '77-3/4\"',
        height: '50\"',
        depth:	'24\"',
        viewingArea:	'74-13/16 x 24\"'
      },
    ]
  },
  {
    id: 3,
    name: 'Heatilator Caliber nXt Gas Fireplace',
    category: 'fireplace',
    subType: 'gas',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatilator/Caliber%20nXt%20Gas%20Fireplace/Slides/Caliber%20NXT%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/caliber-nxt/htl_gasfp_calibernxt-36_contour_traditional_1_960x456.jpg',
    details: {
      info: 'The Caliber nXt series delivers bold fire and impressive heating power to create a dramatic focal point in any room. Textured fiber interior panels with a traditional or herringbone pattern pair with high heat output and a standard fan for an impressive fireplace experience. Create your unique look and define your space with traditional style, proven value and a beautiful roaring fire.',
      bulletPoints: [
        '36” or 42” wide viewing area with a deep firebox',
        'Large logs and generous fire: up to 45,000 BTUs',
        'Enhanced safety with the IntelliFire Touch ignition system',
        'Standard IFT touchscreen remote makes operating your fireplace simple, smart and safe'
      ]
    },
    models: [
      {
        name: 'nXt 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'nXt 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 4,
    name: 'Heatilator Crave Series Gas Fireplace',
    category: 'fireplace',
    subType: 'gas',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatilator/Crave%20Series%20Gas%20Fireplace/Slides/Crave%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/crave/htl-gasfp-crave-modern-blackglass-960x456.jpg',
    details: {
      info: 'The Crave provides modern luxury at an affordable price. All of the essentials for a complete modern design are available in both single-sided and see-through models. Multiple upgrade options also let you accent your style and personalize your look. These affordable fireplaces are truly the best option on the market, providing modern luxury, backed by the #1 preferred brand by builders.',
      bulletPoints: [
        'Full featured RC300 remote control',
        'Enhanced safety of IntelliFire Plus and Direct Vent technology',
        'Up to 58,000 BTUs',
        'Available in 36, 48, 60 and 72-inch models'
      ]
    },
    models: [
      {
        name: ' 36 Rev B',
        manualSrc: 'http://downloads.hearthnhome.com/installManuals/2301_974.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: '48 Rev B',
        manualSrc: 'http://downloads.hearthnhome.com/installManuals/2301_974.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
      {
        name: '60 Rev B ',
        manualSrc: 'http://downloads.hearthnhome.com/installManuals/2301_974.pdf',
        width: '77-3/4\"',
        height: '50\"',
        depth:	'24\"',
        viewingArea:	'74-13/16 x 24\"'
      },
    ]
  },
  {
    id: 5,
    name: 'Heatilator Caliber Gas Fireplace',
    category: 'fireplace',
    subType: 'gas',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com:443/en/Product%20Catalog/Fireplaces/Heatilator/Caliber%20Gas%20Fireplace/Slides/Caliber%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/caliber/htl_gasfp_caliber_simon_traditional_960x456.jpg',
    details: {
      info: 'The Caliber Series delivers bold fire and impressive heating power to create a dramatic focal point in any room. Create your unique look and define your space with traditional style, proven value and a beautiful roaring fire.',
      bulletPoints: [
        '36” or 42” wide viewing area with a deep firebox',
        'Large logs and generous fire: up to 35,000 BTUs',
        'Enhanced safety with the IntelliFire Touch ignition system',
        'Optional IFT touchscreen remote control or wireless wall switch'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 6,
    name: 'Quadra-Fire Pioneer III Wood Fireplace',
    category: 'fireplace',
    subType: 'wood',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Quadrafire/Pioneer%20III%20Wood%20Fireplace/Slides/Slide%201/-/media/images/qdf/product-images/fireplaces/pioneer-iii/qdf-pioneeriii_missionrectfront_960x456.jpg',
    details: {
      info: 'The Caliber Series delivers bold fire and impressive heating power to create a dramatic focal point in any room. Create your unique look and define your space with traditional style, proven value and a beautiful roaring fire.',
      bulletPoints: [
        '74,900 BTUs—heats 1,000 to 2,600 sq. ft. based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24" maximum log length',
        'Up to 10 hours of burn time',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 7,
    name: 'Heatilator Constitution Wood Fireplace',
    category: 'fireplace',
    subType: 'wood',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatilator/Constitution%20Wood%20Fireplace/Slides/Constitution%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/constitution/htl_woodfp_constitution_960x456.jpg',
    details: {
      info: 'The Caliber Series delivers bold fire and impressive heating power to create a dramatic focal point in any room. Create your unique look and define your space with traditional style, proven value and a beautiful roaring fire.',
      bulletPoints: [
        '74,900 BTUs—heats 1,000 to 2,600 sq. ft. based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24" maximum log length',
        'Up to 10 hours of burn time',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 8,
    name: 'Heat & Glo HST See-Through Wood Fireplace',
    category: 'fireplace',
    subType: 'wood',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/HST%20See-Through%20Wood%20Fireplace/Slides/HST%20See-Through%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/hst/hng_woodfp_hst-42d_960x456.jpg',
    details: {
      info: 'The Caliber Series delivers bold fire and impressive heating power to create a dramatic focal point in any room. Create your unique look and define your space with traditional style, proven value and a beautiful roaring fire.',
      bulletPoints: [
        '74,900 BTUs—heats 1,000 to 2,600 sq. ft. based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24" maximum log length',
        'Up to 10 hours of burn time',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 9,
    name: 'Heatilator Accelerator Wood Fireplace',
    category: 'fireplace',
    subType: 'wood',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatilator/Accelerator%20Wood%20Fireplace/Slides/Accelerator%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/accelerator/htl_woodfp_a36r-a36c_960x456.jpg',
    details: {
      info: 'The Accelerator features meticulous craftsmanship for robust fires and an impressive appearance. Multiple fronts and traditional or herringbone brick panels add individual style to the Accelerator’s valued performance.',
      bulletPoints: [
        '74,900 BTUs—heats 1,000 to 2,600 sq. ft. based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24" maximum log length',
        'Up to 10 hours of burn time',
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 10,
    name: 'SimpliFire Scion Electric Fireplace',
    category: 'fireplace',
    subType: 'electric',
    HeatingPower: 'low',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatilator/Accelerator%20Wood%20Fireplace/Slides/Accelerator%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/accelerator/htl_woodfp_a36r-a36c_960x456.jpg',
    details: {
      info: 'The Accelerator features meticulous craftsmanship for robust fires and an impressive appearance. Multiple fronts and traditional or herringbone brick panels add individual style to the Accelerator’s valued performance.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 11,
    name: 'SimpliFire Allusion Electric Fireplace',
    category: 'fireplace',
    subType: 'electric',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Simplifire/Simplifire%20Allusion%20Electric%20Fireplace/Slides/Slide%201/-/media/images/product-images/simplifire-product-images/allusion/simplifire_allusion60_orangeflame-bluelights_room-livingroom2_960x456.jpg',
    details: {
      info: 'The Allusion electric fireplace series embraces modern design by combining linear proportions with a multitude of flame and ember bed LED lighting themes. Additionally, intuitive operation is exemplified by the standard remote and touch controls on the fireplace front.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 12,
    name: 'SimpliFire Built-In Electric Fireplace',
    category: 'fireplace',
    subType: 'electric',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Simplifire/Simplifire%20Built-In%20Electric%20Fireplace/Slides/Slide%201/-/media/images/product-images/simplifire-product-images/built-in/simplifire_built-in36_kenwood_960x456.jpg',
    details: {
      info: 'The Allusion electric fireplace series embraces modern design by combining linear proportions with a multitude of flame and ember bed LED lighting themes. Additionally, intuitive operation is exemplified by the standard remote and touch controls on the fireplace front.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 13,
    name: 'Outdoor Lifestyles Fortress See-Through Gas Fireplace',
    category: 'fireplace',
    subType: 'outdoor',
    HeatingPower: 'low',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Outdoor/Fortress%20See-Through%20Gas%20Fireplace/Slides/Slide%201/-/media/images/product-images/outdoor-products-images/fireplaces/fortress/fortress_exterior_960x456.jpg',
    details: {
      info: 'Seamlessly integrate your indoor and outdoor space with the Fortress see-through gas fireplace. The traditional style, expansive viewing area and authentic look fit perfectly in a variety of spaces. Non-reflective glass, accent lights and multiple interior brick options make this unique fireplace the ultimate in traditional luxury design. Enjoy the view both inside and out with the Fortress.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 14,
    name: 'Outdoor Lifestyles Lanai Gas Fireplace',
    category: 'fireplace',
    subType: 'outdoor',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Outdoor/Castlewood%20Wood%20Fireplace/Slides/Castlewood%20Slide%201/-/media/images/product-images/outdoor-products-images/fireplaces/castlewood/castlewood_out_960x456.jpg',
    details: {
      info: 'Seamlessly integrate your indoor and outdoor space with the Fortress see-through gas fireplace. The traditional style, expansive viewing area and authentic look fit perfectly in a variety of spaces. Non-reflective glass, accent lights and multiple interior brick options make this unique fireplace the ultimate in traditional luxury design. Enjoy the view both inside and out with the Fortress.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
        'Rust-resistant stainless steel construction'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
  {
    id: 15,
    name: 'Outdoor Lifestyles Castlewood Wood Fireplace',
    category: 'fireplace',
    subType: 'outdoor',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Outdoor/Lanai%20Gas%20Fireplace/Slides/Slide%201/-/media/images/product-images/outdoor-products-images/fireplaces/lanai/lanai_960x456.jpg',
    details: {
      info: 'Seamlessly integrate your indoor and outdoor space with the Fortress see-through gas fireplace. The traditional style, expansive viewing area and authentic look fit perfectly in a variety of spaces. Non-reflective glass, accent lights and multiple interior brick options make this unique fireplace the ultimate in traditional luxury design. Enjoy the view both inside and out with the Fortress.',
      bulletPoints: [
        'Enjoy year-round, with or without heat',
        'Four flame color choices, 14 ember bed color choices for complete customization',
        'Safely place a TV or artwork directly above the fireplace',
        'Rust-resistant stainless steel construction'
      ]
    },
    models: [
      {
        name: 'IFT 36',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '41\"',
        height: '39-7/8\"',
        depth:	'21\"',
        viewingArea:	'35 x 24-1/8\"'
      },
      {
        name: 'IFT 36 42',
        manualSrc: 'http://downloads.hearthnhome.com/brochures/HTL-1096U.pdf',
        width: '48\"',
        height: '41-7/8\"',
        depth:	'21\"',
        viewingArea:	'	42 x 26-1/8\"'
      },
    ]
  },
]

module.exports = Products
