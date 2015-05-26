var combineMatchers = [
    {matcherName: "addressBlock", templateId: "address", combineIds: ['person_name','addressPart'], order: 10000000 },
    {matcherName: "wikiInfo", templateId: "wikiInfo", combineIds: ['wikiPageID','wikiPageRevisionID'], order: 20000 },
    {matcherName: "addressPartCombine", templateId: "address", combineIds: ['address_line2','address_line3'], order: 10000000 },
    {matcherName: "community", templateId: "community", combineIds: ['depiction','label_comment'], order: 10010000 },
    {matcherName: "community_stat", templateId: "community_stat", combineIds: ['area','elevation','website'], order: 10010000 },
    {matcherName: "label_comment", templateId: "label_comment", combineIds: ['rdfschema_label','comment'], order: 10100000 },
    {matcherName: "person_name", templateId: "person_name", combineIds: ['lastName','firstName'], order: 10000000 },
    {matcherName: "multiple_name_1", templateId: "title", combineIds: ['schema_name','rdfschema_label','skos_prefLabel'], order: 10000000 },
    {matcherName: "multiple_name_2", templateId: "title", combineIds: ['schema_name','rdfschema_label'], order: 10000000 },
    {matcherName: "multiple_name_3", templateId: "title", combineIds: ['rdfschema_label','skos_prefLabel'], order: 10000000 },
    {matcherName: "multiple_name_4", templateId: "title", combineIds: ['schema_name','skos_prefLabel'], order: 10000000 },
    {matcherName: "location", templateId: "location", combineIds: ['lat','long'], order: 9000000 },
    {matcherName: "createMeta", templateId: "createMeta", combineIds: ['created','creator'], order: 10000000 },
    {matcherName: "address_line2", templateId: "address_line2", combineIds: ['street','street2'], order: 10000000 },
    {matcherName: "address_line3", templateId: "address_line3", combineIds: ['city','country','postalCode'], order: 10000000 },
    {matcherName: "tempC", templateId: "mhltemp", combineIds: ['meanC','highC','lowC'], order: 8000000 },
    {matcherName: "meanC", templateId: "temp", combineIds: ['janMeanC','febMeanC','marMeanC','aprMeanC','mayMeanC','junMeanC','julMeanC','augMeanC','sepMeanC','octMeanC','novMeanC','decMeanC'], order: 8000000 },
    {matcherName: "humi", templateId: "humidity", combineIds: ['janHumidity','febHumidity','marHumidity','aprHumidity','mayHumidity','junHumidity','julHumidity','augHumidity','sepHumidity','octHumidity','novHumidity','decHumidity'], order: 8000000 },
    {matcherName: "highC", templateId: "temp", combineIds: ['janHighC','febHighC','marHighC','aprHighC','mayHighC','junHighC','julHighC','augHighC','sepHighC','octHighC','novHighC','decHighC'], order: 8000000 },
    {matcherName: "lowC", templateId: "temp", combineIds: ['janLowC','febLowC','marLowC','aprLowC','mayLowC','junLowC','julLowC','augLowC','sepLowC','octLowC','novLowC','decLowC'], order: 8000000 },
    {matcherName: "eventLocation", templateId: "eventLocation", combineIds: ['lat', 'long'], order: 6000000},
    {matcherName: "eventAddress", templateId: "eventInfobox", combineIds: ['schema_streetAddress', 'schema_postalCode', 'schema_addressLocality'], order: 6000000},
    {matcherName: "eventOrganizer", templateId: "eventInfoBox", combineIds: ['schema_name', 'email', 'telephone'], order: 6000000},
    {matcherName: "eventInfoBox", templateId: "eventInfoBox", combineIds: ['rdfschema_label', 'schema_description', 'schema_category', 'comment',"linkEventOrganizer","startDate","endDate"], order: 7000000 },
    {matcherName: "eventPOI", templateId: "POIInfoBox", combineIds: ['rdfschema_label', 'comment', 'foaf_mbox', 'foaf_phone', 'foaf_homepage', 'schema_category'], order: 7000000},
    {matcherName: "eventSkos", templateId: "carousel", combineIds: ['skos_related'], order: 100000},
    //Matchers for http://public-contracts.nexacenter.org/
    {matcherName: "contractInformation", templateId: "pagingBox", combineIds: ['rdfschema_label'], order: 100000},
    {matcherName: "awardedPaymentBars", templateId: "bars", combineIds: ['rdfschema_label', 'awarded'], order: 100000},
    {matcherName: "registryCombine", templateId: "registryA", combineIds: ['rdfschema_label', 'gr_vatID'], order: 100000},

];

var linkMatchers = [
    {matcherName: "neighboringMunicipality", predicate: "http://dbpedia.org/property/neighboringMunicipalities", templateId: "neighboringMunicipality", templateVariable: "neighboringMunicipality", order: 4000000, linkIds: ['rdfschema_label']},
    {matcherName: "addressPart", predicate: "http://www.w3.org/2000/10/swap/pim/contact#address", templateVariable: "addressLink", templateId: "address", order: 1000000, linkIds: ['addressPartCombine']},
    {matcherName: "creator", predicate: "http://purl.org/dc/terms/creator", templateVariable: "creator", templateId: "creator", order: 20000, linkIds: ['rdfschema_label'] },
    {matcherName: "linkEventLocation", predicate: "http://schema.org/location", templateVariable: "locationLink", templateId: "eventLocation", order: 200000, linkIds: ['eventLocation']},
    {matcherName: "linkEventOrganizer", predicate: "http://schema.org/organizer", templateVariable: "organizerLink", templateId: "eventInfoBox", order: 200000, linkIds: ['eventOrganizer']},
    {matcherName: "linkEventAddress", predicate: "http://schema.org/address", templateVariable: "addressLink", templateId: "eventInfoBox", order: 200000, linkIds: ['eventAddress']},
    {matcherName: "linkPOIEvent", predicate: "http://sandbox.fusepool.info:8181/contains", templateVariable: "POILink", templateId: "POIInfoBox", order: 1100000, linkIds: ['eventPOI']}, // Usable only for Fusepool Platform
    {matcherName: "linkSkosRelated", predicate: "http://www.w3.org/2004/02/skos/core#related", templateVariable: "skosLink", templateId: "carousel", order: 100000, linkIds: ['eventSkos']},
    //Matchers for http://public-contracts.nexacenter.org/
    {matcherName: "linkVatIDCig", predicate: "http://public-contracts.nexacenter.org/id/contract", templateVariable: "contractLink", templateId: "pagingBox", order: 200000, linkIds: ['contractInformation']},
    {matcherName: "linkVatIDWonCig", predicate: "http://public-contracts.nexacenter.org/id/wonContract", templateVariable: "contractLink", templateId: "pagingBox", order: 200000, linkIds: ['contractInformation']},
    {matcherName: "linkVatIDPA", predicate: "http://public-contracts.nexacenter.org/id/awardedPaymentFrom", templateVariable: "awardedPaymentFromLink", templateId: "bars", order: 200000, linkIds: ['awardedPaymentBars']},
    {matcherName: "linkVatIDPANum", predicate: "http://public-contracts.nexacenter.org/id/numberOfPaymentFrom", templateVariable: "awardedPaymentFromLink", templateId: "bars", order: 200000, linkIds: ['awardedPaymentBars']},
    {matcherName: "linkVatIDBE", predicate: "http://public-contracts.nexacenter.org/id/awardsBusinessEntity", templateVariable: "awardedPaymentFromLink", templateId: "bars", order: 200000, linkIds: ['awardedPaymentBars']},
    {matcherName: "linkVatIDBENum", predicate: "http://public-contracts.nexacenter.org/id/numberOfBEs", templateVariable: "awardedPaymentFromLink", templateId: "bars", order: 200000, linkIds: ['awardedPaymentBars']}
];

var predicateMatchers = [
    {matcherName: "rdfschema_label", predicate: "http://www.w3.org/2000/01/rdf-schema#label", templateVariable: "label", templateId: "title", order: 1100000 },
    {matcherName: "quote", predicate: "http://dbpedia.org/property/quote", templateVariable: "quote", templateId: "quote", order: 50000 },
    {matcherName: "skos_prefLabel", predicate: "http://www.w3.org/2004/02/skos/core#prefLabel", templateVariable: "title", templateId: "title", order: 60000 },
    {matcherName: "skos_altLabel", predicate: "http://www.w3.org/2004/02/skos/core#altLabel", templateVariable: "text", templateId: "text", order: 60000 },
    {matcherName: "schema_name", predicate: "http://schema.org/name", templateVariable: "title", templateId: "title", order: 60000 },
    {matcherName: "schema_description", predicate: "http://schema.org/description", templateVariable: "description", templateId: "text", order: 90000 },
    {matcherName: "purl_description", predicate: "http://purl.org/dc/elements/1.1/description", templateVariable: "text", templateId: "text", order: 90000 },
    {matcherName: "purl_title", predicate: "http://purl.org/dc/terms/title", templateId: "title", order: 1000000 },
    {matcherName: "depiction", predicate: "http://xmlns.com/foaf/0.1/depiction", templateVariable: "img_url", templateId: "img", order: 1000000 },
    {matcherName: "pmid", predicate: "http://purl.org/ontology/bibo/pmid", templateId: "pmid", order: 80000 },
    {matcherName: "firstName", predicate: "http://xmlns.com/foaf/0.1/firstName", templateId: "person_name", order: 60000 },
    {matcherName: "lastName", predicate: "http://xmlns.com/foaf/0.1/lastName", templateId: "person_name", order: 60000 },
    {matcherName: "name", predicate: "http://xmlns.com/foaf/0.1/name", templateId: "name", order: 60000 },
    {matcherName: "license", predicate: "http://purl.org/dc/terms/license", templateId: "license", order: 20000 },
    {matcherName: "created", predicate: "http://purl.org/dc/terms/created", templateId: "created", order: 20000 },
    {matcherName: "text", predicate: "http://rdfs.org/sioc/ns#content", templateId: "text", order: 90000 },
    {matcherName: "comment", predicate: "http://www.w3.org/2000/01/rdf-schema#comment", templateVariable: "comment", templateId: "text", order: 90000 },
    {matcherName: "abstract", predicate: "http://dbpedia.org/ontology/abstract", templateVariable: "abstract", templateId: "abstract", order: 6000000 },
    {matcherName: "elevation", predicate: "http://dbpedia.org/ontology/elevation", templateId: "elevation", order: 9400000 },
    {matcherName: "wikiPageRevisionID", predicate: "http://dbpedia.org/ontology/wikiPageRevisionID", templateId: "wikiPageRevisionID", order: 20000 },
    {matcherName: "wikiPageID", predicate: "http://dbpedia.org/ontology/wikiPageID", templateId: "wikiPageID", order: 20000 },
    {matcherName: "area", predicate: "http://dbpedia.org/property/area", templateId: "area", order: 9300000 },
    {matcherName: "website", predicate: "http://dbpedia.org/property/website", templateId: "website", order: 9500000 },
    {matcherName: "long", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#long", templateId: "text", order: 90000 },
    {matcherName: "lat", predicate: "http://www.w3.org/2003/01/geo/wgs84_pos#lat", templateId: "text", order: 90000 },
    {matcherName: "city", predicate: "http://www.w3.org/2000/10/swap/pim/contact#city", templateId: "text", order: 90000 },
    {matcherName: "country", predicate: "http://www.w3.org/2000/10/swap/pim/contact#country", templateId: "text", order: 90000 },
    {matcherName: "street", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street", templateId: "text", order: 90000 },
    {matcherName: "street2", predicate: "http://www.w3.org/2000/10/swap/pim/contact#street2", templateId: "text", order: 90000 },
    {matcherName: "postalCode", predicate: "http://www.w3.org/2000/10/swap/pim/contact#postalCode", templateId: "text", order: 90000 },
    {matcherName: "canton", predicate: "http://dbpedia.org/ontology/canton",templateVariable: "link", templateId: "link", order: 90000 },
    {matcherName: "janMeanC", predicate: "http://dbpedia.org/property/janMeanC", templateId: "text", templateVariable: "jan", order: 9000000 },
    {matcherName: "febMeanC", predicate: "http://dbpedia.org/property/febMeanC", templateId: "text", templateVariable: "feb", order: 9000000 },
    {matcherName: "marMeanC", predicate: "http://dbpedia.org/property/marMeanC", templateId: "text", templateVariable: "mar", order: 9000000 },
    {matcherName: "aprMeanC", predicate: "http://dbpedia.org/property/aprMeanC", templateId: "text", templateVariable: "apr", order: 9000000 },
    {matcherName: "mayMeanC", predicate: "http://dbpedia.org/property/mayMeanC", templateId: "text", templateVariable: "may", order: 9000000 },
    {matcherName: "junMeanC", predicate: "http://dbpedia.org/property/junMeanC", templateId: "text", templateVariable: "jun", order: 9000000 },
    {matcherName: "julMeanC", predicate: "http://dbpedia.org/property/julMeanC", templateId: "text", templateVariable: "jul", order: 9000000 },
    {matcherName: "augMeanC", predicate: "http://dbpedia.org/property/augMeanC", templateId: "text", templateVariable: "aug", order: 9000000 },
    {matcherName: "sepMeanC", predicate: "http://dbpedia.org/property/sepMeanC", templateId: "text", templateVariable: "sep", order: 9000000 },
    {matcherName: "octMeanC", predicate: "http://dbpedia.org/property/octMeanC", templateId: "text", templateVariable: "oct", order: 9000000 },
    {matcherName: "novMeanC", predicate: "http://dbpedia.org/property/novMeanC", templateId: "text", templateVariable: "nov", order: 9000000 },
    {matcherName: "decMeanC", predicate: "http://dbpedia.org/property/decMeanC", templateId: "text", templateVariable: "dec", order: 9000000 },
    {matcherName: "janHighC", predicate: "http://dbpedia.org/property/janHighC", templateId: "text", templateVariable: "jan", order: 9000000 },
    {matcherName: "febHighC", predicate: "http://dbpedia.org/property/febHighC", templateId: "text", templateVariable: "feb", order: 9000000 },
    {matcherName: "marHighC", predicate: "http://dbpedia.org/property/marHighC", templateId: "text", templateVariable: "mar", order: 9000000 },
    {matcherName: "aprHighC", predicate: "http://dbpedia.org/property/aprHighC", templateId: "text", templateVariable: "apr", order: 9000000 },
    {matcherName: "mayHighC", predicate: "http://dbpedia.org/property/mayHighC", templateId: "text", templateVariable: "may", order: 9000000 },
    {matcherName: "junHighC", predicate: "http://dbpedia.org/property/junHighC", templateId: "text", templateVariable: "jun", order: 9000000 },
    {matcherName: "julHighC", predicate: "http://dbpedia.org/property/julHighC", templateId: "text", templateVariable: "jul", order: 9000000 },
    {matcherName: "augHighC", predicate: "http://dbpedia.org/property/augHighC", templateId: "text", templateVariable: "aug", order: 9000000 },
    {matcherName: "sepHighC", predicate: "http://dbpedia.org/property/sepHighC", templateId: "text", templateVariable: "sep", order: 9000000 },
    {matcherName: "octHighC", predicate: "http://dbpedia.org/property/octHighC", templateId: "text", templateVariable: "oct", order: 9000000 },
    {matcherName: "novHighC", predicate: "http://dbpedia.org/property/novHighC", templateId: "text", templateVariable: "nov", order: 9000000 },
    {matcherName: "decHighC", predicate: "http://dbpedia.org/property/decHighC", templateId: "text", templateVariable: "dec", order: 9000000 },
    {matcherName: "janLowC", predicate: "http://dbpedia.org/property/janLowC", templateId: "text", templateVariable: "jan", order: 9000000 },
    {matcherName: "febLowC", predicate: "http://dbpedia.org/property/febLowC", templateId: "text", templateVariable: "feb", order: 9000000 },
    {matcherName: "marLowC", predicate: "http://dbpedia.org/property/marLowC", templateId: "text", templateVariable: "mar", order: 9000000 },
    {matcherName: "aprLowC", predicate: "http://dbpedia.org/property/aprLowC", templateId: "text", templateVariable: "apr", order: 9000000 },
    {matcherName: "mayLowC", predicate: "http://dbpedia.org/property/mayLowC", templateId: "text", templateVariable: "may", order: 9000000 },
    {matcherName: "junLowC", predicate: "http://dbpedia.org/property/junLowC", templateId: "text", templateVariable: "jun", order: 9000000 },
    {matcherName: "julLowC", predicate: "http://dbpedia.org/property/julLowC", templateId: "text", templateVariable: "jul", order: 9000000 },
    {matcherName: "augLowC", predicate: "http://dbpedia.org/property/augLowC", templateId: "text", templateVariable: "aug", order: 9000000 },
    {matcherName: "sepLowC", predicate: "http://dbpedia.org/property/sepLowC", templateId: "text", templateVariable: "sep", order: 9000000 },
    {matcherName: "octLowC", predicate: "http://dbpedia.org/property/octLowC", templateId: "text", templateVariable: "oct", order: 9000000 },
    {matcherName: "novLowC", predicate: "http://dbpedia.org/property/novLowC", templateId: "text", templateVariable: "nov", order: 9000000 },
    {matcherName: "decLowC", predicate: "http://dbpedia.org/property/decLowC", templateId: "text", templateVariable: "dec", order: 9000000 },
    {matcherName: "janHumidity", predicate: "http://dbpedia.org/property/janHumidity", templateId: "text", templateVariable: "jan", order: 9000000 },
    {matcherName: "febHumidity", predicate: "http://dbpedia.org/property/febHumidity", templateId: "text", templateVariable: "feb", order: 9000000 },
    {matcherName: "marHumidity", predicate: "http://dbpedia.org/property/marHumidity", templateId: "text", templateVariable: "mar", order: 9000000 },
    {matcherName: "aprHumidity", predicate: "http://dbpedia.org/property/aprHumidity", templateId: "text", templateVariable: "apr", order: 9000000 },
    {matcherName: "mayHumidity", predicate: "http://dbpedia.org/property/mayHumidity", templateId: "text", templateVariable: "may", order: 9000000 },
    {matcherName: "junHumidity", predicate: "http://dbpedia.org/property/junHumidity", templateId: "text", templateVariable: "jun", order: 9000000 },
    {matcherName: "julHumidity", predicate: "http://dbpedia.org/property/julHumidity", templateId: "text", templateVariable: "jul", order: 9000000 },
    {matcherName: "augHumidity", predicate: "http://dbpedia.org/property/augHumidity", templateId: "text", templateVariable: "aug", order: 9000000 },
    {matcherName: "sepHumidity", predicate: "http://dbpedia.org/property/sepHumidity", templateId: "text", templateVariable: "sep", order: 9000000 },
    {matcherName: "octHumidity", predicate: "http://dbpedia.org/property/octHumidity", templateId: "text", templateVariable: "oct", order: 9000000 },
    {matcherName: "novHumidity", predicate: "http://dbpedia.org/property/novHumidity", templateId: "text", templateVariable: "nov", order: 9000000 },
    {matcherName: "decHumidity", predicate: "http://dbpedia.org/property/decHumidity", templateId: "text", templateVariable: "dec", order: 9000000 },
    // Matchers to manage data on fusepool events
    {matcherName: "email", predicate: "http://schema.org/email", templateId: "text", templateVariable: "email", order: 90000 },
    {matcherName: "telephone", predicate: "http://schema.org/telephone", templateId: "text", templateVariable: "telephone", order: 90000 },
    {matcherName: "startDate", predicate: "http://schema.org/startDate", templateId: "text", templateVariable: "startDate", order: 90000 },  
    {matcherName: "endDate", predicate: "http://schema.org/endDate", templateId: "text", templateVariable: "endDate", order: 1100000 },
    {matcherName: "schema_addressLocality", predicate: "http://schema.org/addressLocality", templateId: "text", templateVariable: "addressLocality", order: 1100000},
    {matcherName: "schema_postalCode", predicate: "http://schema.org/postalCode", templateId: "text", templateVariable: "postalCode", order: 1100000},
    {matcherName: "schema_streetAddress", predicate: "http://schema.org/streetAddress", templateId: "text", templateVariable: "streetAddress", order: 1100000},
    {matcherName: "schema_category", predicate: "http://schema.org/category", templateId: "text", templateVariable: "category", order: 1100000},
    {matcherName: "foaf_mbox", predicate: "http://xmlns.com/foaf/0.1/mbox", templateId: "text", templateVariable: "mbox", order: 1100000},
    {matcherName: "foaf_phone", predicate: "http://xmlns.com/foaf/0.1/phone", templateId: "text", templateVariable: "phone", order: 1100000},
    {matcherName: "foaf_homepage", predicate: "http://xmlns.com/foaf/0.1/homepage", templateId: "text", templateVariable: "homepage", order: 1100000},
    {matcherName: "skos_related", predicate: "http://www.w3.org/2004/02/skos/core#related", templateId: "text", templateVariable: "text", order: 1100000},
    //Matchers for http://public-contracts.nexacenter.org/
    {matcherName: "awarded", predicate: "http://public-contracts.nexacenter.org/id/awarded", templateId: "text", templateVariable: "awarded", order: 1100000},
    {matcherName: "awardedTotal", predicate: "http://public-contracts.nexacenter.org/id/awardedTotal", templateId: "simpleTable", templateVariable: "total", order: 1100000},
    {matcherName: "paidTotal", predicate: "http://public-contracts.nexacenter.org/id/paidTotal", templateId: "simpleTable", templateVariable: "total", order: 1100000},
    {matcherName: "awardsTotal", predicate: "http://public-contracts.nexacenter.org/id/awardsTotal", templateId: "simpleTable", templateVariable: "total", order: 1100000},
    {matcherName: "paysTotal", predicate: "http://public-contracts.nexacenter.org/id/paysTotal", templateId: "simpleTable", templateVariable: "total", order: 1100000},
    {matcherName: "gr_vatID", predicate: "http://purl.org/goodrelations/v1#vatID", templateId: "text", templateVariable: "vatID", order: 1100000}
];
