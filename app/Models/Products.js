const Products = [
  {
    id: 1,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
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
    name: 'Heat & Glo Rutherford Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Rutherford%20Wood%20Fireplace/Slides/Rutherford%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/rutherford/hng_woodfp_rutherford-36_960x456.jpg',
    details: {
      info: 'The Rutherford Series offers robust performance and the appearance of a custom-built masonry fireplace—all at a fraction of the cost. Whether a crackle or a blaze, the Rutherford delivers a bold statement in your favorite room.',
      bulletPoints: [
        '36", 42" or 50" viewing area',
        'Optional mesh screen doors or bi-fold doors',
        'Authentic masonry look without the cost of a site-built masonry fireplace',
        'Choice of traditional or herringbone molded brick panels'
      ]
    },
    models: [
      {
        name: 'RUTH-36B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_707.pdf',
        width: '46-7/8\"',
        height: '74-1/8\"',
        depth:	'27-1/2\"',
        viewingArea:	'36 x 38\"'
      },
      {
        name: 'RUTH-42B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_713.pdf',
        width: '42\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'42 x 38\"'
      },
      {
        name: 'RUTH-50B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_702.pdf',
        width: '60-7/8\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'50 x 38\"'
      }
    ]
  },
  {
    id: 3,
    name: 'Heat & Glo Northstar Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Northstar%20Wood%20Fireplace/Slides/North%20Star%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/north-star/hng_woodfp_north-star_960x456.jpg',
    details: {
      info: 'The Northstar exceeds the strictest environmental standards in the nation—so you can enjoy roaring fires even in areas where conventional wood-burning fireplaces are banned.',
      bulletPoints: [
        '74,900 BTUs—Heats 1,000 to 2,600 square feet based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24 in. maximum log length',
        'Up to 10 hours of burn time from each load of wood',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'HG-40',
        manualSrc: 'https://downloads.hearthnhome.com/brochures/PremierWood.pdf',
        width: '40\"',
        height: '40-1/4\"',
        depth:	'23-1/8\"',
        viewingArea:	'36 x 20-7/8\"'
      }
    ]
  },
  {
    id: 4,
    name: 'Heatilator Multi-sided Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com:443/en/Product%20Catalog/Fireplaces/Heatilator/Multi-sided%20Wood%20Fireplace/Slides/Multi-sided%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/st36d-st42a/htl_woodfp_st36d_960x456.jpg',
    details: {
      info: 'This super-sized see-thru fireplace makes twice the impact! With two sides, these multi-sided wood fireplaces enhance the style and drama of traditional and contemporary spaces alike. Match any décor with multiple finishing options.',
      bulletPoints: ['36" or 42" viewing area','Bi-fold doors available','See-thru viewing']
    },
    models: [
      {
        name: 'ST36d',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_061.pdf',
        width: '40\"',
        height: '47-1/4\"',
        depth:	'24\"',
        viewingArea:	'36 x 20-7/8\"'
      },
      {
        name: 'ST42A',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_051.pdf',
        width: '47\"',
        height: '58-7/8\"',
        depth:	'28\"',
        viewingArea:	'42 x 23\"'
      }
    ]
  },
  {
    id: 5,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
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
    id: 6,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 7,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 8,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 9,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 10,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 11,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
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
    id: 16,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
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
    id: 12,
    name: 'Heat & Glo Rutherford Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Rutherford%20Wood%20Fireplace/Slides/Rutherford%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/rutherford/hng_woodfp_rutherford-36_960x456.jpg',
    details: {
      info: 'The Rutherford Series offers robust performance and the appearance of a custom-built masonry fireplace—all at a fraction of the cost. Whether a crackle or a blaze, the Rutherford delivers a bold statement in your favorite room.',
      bulletPoints: [
        '36", 42" or 50" viewing area',
        'Optional mesh screen doors or bi-fold doors',
        'Authentic masonry look without the cost of a site-built masonry fireplace',
        'Choice of traditional or herringbone molded brick panels'
      ]
    },
    models: [
      {
        name: 'RUTH-36B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_707.pdf',
        width: '46-7/8\"',
        height: '74-1/8\"',
        depth:	'27-1/2\"',
        viewingArea:	'36 x 38\"'
      },
      {
        name: 'RUTH-42B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_713.pdf',
        width: '42\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'42 x 38\"'
      },
      {
        name: 'RUTH-50B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_702.pdf',
        width: '60-7/8\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'50 x 38\"'
      }
    ]
  },
  {
    id: 13,
    name: 'Heat & Glo Northstar Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Northstar%20Wood%20Fireplace/Slides/North%20Star%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/north-star/hng_woodfp_north-star_960x456.jpg',
    details: {
      info: 'The Northstar exceeds the strictest environmental standards in the nation—so you can enjoy roaring fires even in areas where conventional wood-burning fireplaces are banned.',
      bulletPoints: [
        '74,900 BTUs—Heats 1,000 to 2,600 square feet based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24 in. maximum log length',
        'Up to 10 hours of burn time from each load of wood',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'HG-40',
        manualSrc: 'https://downloads.hearthnhome.com/brochures/PremierWood.pdf',
        width: '40\"',
        height: '40-1/4\"',
        depth:	'23-1/8\"',
        viewingArea:	'36 x 20-7/8\"'
      }
    ]
  },
  {
    id: 14,
    name: 'Heatilator Multi-sided Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com:443/en/Product%20Catalog/Fireplaces/Heatilator/Multi-sided%20Wood%20Fireplace/Slides/Multi-sided%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/st36d-st42a/htl_woodfp_st36d_960x456.jpg',
    details: {
      info: 'This super-sized see-thru fireplace makes twice the impact! With two sides, these multi-sided wood fireplaces enhance the style and drama of traditional and contemporary spaces alike. Match any décor with multiple finishing options.',
      bulletPoints: ['36" or 42" viewing area','Bi-fold doors available','See-thru viewing']
    },
    models: [
      {
        name: 'ST36d',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_061.pdf',
        width: '40\"',
        height: '47-1/4\"',
        depth:	'24\"',
        viewingArea:	'36 x 20-7/8\"'
      },
      {
        name: 'ST42A',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_051.pdf',
        width: '47\"',
        height: '58-7/8\"',
        depth:	'28\"',
        viewingArea:	'42 x 23\"'
      }
    ]
  },
  {
    id: 15,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'wood',
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
    id: 100,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'gas',
    productType: 'gas',
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
    id: 200,
    name: 'Heat & Glo Rutherford Wood Fireplace',
    category: 'outdoor',
    productType: 'outdoor',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Rutherford%20Wood%20Fireplace/Slides/Rutherford%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/rutherford/hng_woodfp_rutherford-36_960x456.jpg',
    details: {
      info: 'The Rutherford Series offers robust performance and the appearance of a custom-built masonry fireplace—all at a fraction of the cost. Whether a crackle or a blaze, the Rutherford delivers a bold statement in your favorite room.',
      bulletPoints: [
        '36", 42" or 50" viewing area',
        'Optional mesh screen doors or bi-fold doors',
        'Authentic masonry look without the cost of a site-built masonry fireplace',
        'Choice of traditional or herringbone molded brick panels'
      ]
    },
    models: [
      {
        name: 'RUTH-36B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_707.pdf',
        width: '46-7/8\"',
        height: '74-1/8\"',
        depth:	'27-1/2\"',
        viewingArea:	'36 x 38\"'
      },
      {
        name: 'RUTH-42B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_713.pdf',
        width: '42\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'42 x 38\"'
      },
      {
        name: 'RUTH-50B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_702.pdf',
        width: '60-7/8\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'50 x 38\"'
      }
    ]
  },
  {
    id: 300,
    name: 'Heat & Glo Northstar Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'outdoor',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Northstar%20Wood%20Fireplace/Slides/North%20Star%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/north-star/hng_woodfp_north-star_960x456.jpg',
    details: {
      info: 'The Northstar exceeds the strictest environmental standards in the nation—so you can enjoy roaring fires even in areas where conventional wood-burning fireplaces are banned.',
      bulletPoints: [
        '74,900 BTUs—Heats 1,000 to 2,600 square feet based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24 in. maximum log length',
        'Up to 10 hours of burn time from each load of wood',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'HG-40',
        manualSrc: 'https://downloads.hearthnhome.com/brochures/PremierWood.pdf',
        width: '40\"',
        height: '40-1/4\"',
        depth:	'23-1/8\"',
        viewingArea:	'36 x 20-7/8\"'
      }
    ]
  },
  {
    id: 400,
    name: 'Heatilator Multi-sided Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'electric',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com:443/en/Product%20Catalog/Fireplaces/Heatilator/Multi-sided%20Wood%20Fireplace/Slides/Multi-sided%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/st36d-st42a/htl_woodfp_st36d_960x456.jpg',
    details: {
      info: 'This super-sized see-thru fireplace makes twice the impact! With two sides, these multi-sided wood fireplaces enhance the style and drama of traditional and contemporary spaces alike. Match any décor with multiple finishing options.',
      bulletPoints: ['36" or 42" viewing area','Bi-fold doors available','See-thru viewing']
    },
    models: [
      {
        name: 'ST36d',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_061.pdf',
        width: '40\"',
        height: '47-1/4\"',
        depth:	'24\"',
        viewingArea:	'36 x 20-7/8\"'
      },
      {
        name: 'ST42A',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_051.pdf',
        width: '47\"',
        height: '58-7/8\"',
        depth:	'28\"',
        viewingArea:	'42 x 23\"'
      }
    ]
  },
  {
    id: 500,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'gas',
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
    id: 600,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'gas',
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
    id: 700,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'gas',
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
    id: 800,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'gas',
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
    id: 900,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'electric',
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
    id: 1000,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'electric',
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
    id: 1100,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'outdoor',
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
    id: 1600,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'outdoor',
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
    id: 1200,
    name: 'Heat & Glo Rutherford Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'electric',
    HeatingPower: 'low',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Rutherford%20Wood%20Fireplace/Slides/Rutherford%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/rutherford/hng_woodfp_rutherford-36_960x456.jpg',
    details: {
      info: 'The Rutherford Series offers robust performance and the appearance of a custom-built masonry fireplace—all at a fraction of the cost. Whether a crackle or a blaze, the Rutherford delivers a bold statement in your favorite room.',
      bulletPoints: [
        '36", 42" or 50" viewing area',
        'Optional mesh screen doors or bi-fold doors',
        'Authentic masonry look without the cost of a site-built masonry fireplace',
        'Choice of traditional or herringbone molded brick panels'
      ]
    },
    models: [
      {
        name: 'RUTH-36B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_707.pdf',
        width: '46-7/8\"',
        height: '74-1/8\"',
        depth:	'27-1/2\"',
        viewingArea:	'36 x 38\"'
      },
      {
        name: 'RUTH-42B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_713.pdf',
        width: '42\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'42 x 38\"'
      },
      {
        name: 'RUTH-50B',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4059_702.pdf',
        width: '60-7/8\"',
        height: '43-3/4\"',
        depth:	'24\"',
        viewingArea:	'50 x 38\"'
      }
    ]
  },
  {
    id: 1300,
    name: 'Heat & Glo Northstar Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'electric',
    HeatingPower: 'high',
    sides: 'single',
    imgSrc: 'https://www.fireplaces.com/en/Product%20Catalog/Fireplaces/Heatnglo/Northstar%20Wood%20Fireplace/Slides/North%20Star%20Slide%201/-/media/images/fpl/product-images/fireplaces/hng/north-star/hng_woodfp_north-star_960x456.jpg',
    details: {
      info: 'The Northstar exceeds the strictest environmental standards in the nation—so you can enjoy roaring fires even in areas where conventional wood-burning fireplaces are banned.',
      bulletPoints: [
        '74,900 BTUs—Heats 1,000 to 2,600 square feet based on climate and home efficiency',
        '2.7 cu ft interior capacity / 24 in. maximum log length',
        'Up to 10 hours of burn time from each load of wood',
        'EPA certified with emission levels of just 3.3 grams per hour'
      ]
    },
    models: [
      {
        name: 'HG-40',
        manualSrc: 'https://downloads.hearthnhome.com/brochures/PremierWood.pdf',
        width: '40\"',
        height: '40-1/4\"',
        depth:	'23-1/8\"',
        viewingArea:	'36 x 20-7/8\"'
      }
    ]
  },
  {
    id: 1400,
    name: 'Heatilator Multi-sided Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'gas',
    HeatingPower: 'high',
    sides: 'double',
    imgSrc: 'https://www.fireplaces.com:443/en/Product%20Catalog/Fireplaces/Heatilator/Multi-sided%20Wood%20Fireplace/Slides/Multi-sided%20Slide%201/-/media/images/product-images/heatilator-product-images/fireplaces/st36d-st42a/htl_woodfp_st36d_960x456.jpg',
    details: {
      info: 'This super-sized see-thru fireplace makes twice the impact! With two sides, these multi-sided wood fireplaces enhance the style and drama of traditional and contemporary spaces alike. Match any décor with multiple finishing options.',
      bulletPoints: ['36" or 42" viewing area','Bi-fold doors available','See-thru viewing']
    },
    models: [
      {
        name: 'ST36d',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_061.pdf',
        width: '40\"',
        height: '47-1/4\"',
        depth:	'24\"',
        viewingArea:	'36 x 20-7/8\"'
      },
      {
        name: 'ST42A',
        manualSrc: 'https://downloads.hearthnhome.com/installManuals/4012_051.pdf',
        width: '47\"',
        height: '58-7/8\"',
        depth:	'28\"',
        viewingArea:	'42 x 23\"'
      }
    ]
  },
  {
    id: 1500,
    name: 'Quadra-Fire Pioneer II Wood Fireplace',
    category: 'Wood Fireplace',
    productType: 'gas',
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
  }
]

module.exports = Products
