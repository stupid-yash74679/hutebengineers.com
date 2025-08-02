function showAlert(id) {
    var result = ko.observableArray();
    $.each(productsArray, function (key, value) {
        if (id == 0) {
            result.push(value);
        } else if (value.catid == id) {
            result.push(value);
        }
    });
    return result;
}
// This observable array initially contains three objects
var productsArray = [
    {
        "id": "1",
        "name": "Huteb Mortar EP ( Epoxy Mortar )",
        "cat": "Chemical Resistant",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/1.png",
        "longdescription": "HUTEBMORTAR EP is based on a polyester resin system. The product is supplied as resin and hardener for varied applications, viz., jointing, patching and repairing. It is available in two grades. HUTEBMORTAR EP For general repairs (resin and hardener only) and HUTEBMORTAR EP: To fill larger volumes allowing concrete users to add aggregates and substantially reducing the cost.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "For fast and emergency repair of concrete",
            "For bedding, jointing, profiling of concrete",
            "Repair of damaged concrete in precast units",
            "Jointing between precast units",
            "Repair of stair treads",
            "Fixing tiles, cladding",
            "Repairs to kerbs, manhole covers, door and window frames etc."

        ],
        "tab2data": [
            "Durable and Stronger",
            "Highly chemical and oil resistant",
            "Excellent bond strength",
            "Ease of application as we can mix resin and hardener in any proportion as required",
            "No primer is required",
            "Quick finish job operation in 2 - 3 hours",
            "It is Versatile and can be poured, trowelled, and filled with coarse aggregates",
            "Will cure in dry, wet, damp, and underwater conditions",
            "It can be used at down to 00C or up to 600C"

        ],
        "tab3data": [
            "All surfaces must be preferably dry and free from oil, loose particles and laitance.",
            "The required quantity of resin shall be poured into a plastic bucket and the powder hardener shall be added slowly with stirring thoroughly until uniform consistency is obtained.",
            "It is recommended that small quantities be mixed at a time and used since pot life of the mixed material decreases at elevated temperatures.",
            "Ensure that resin mortar is trowelled firmly into place to obtain good adhesion.",
            "Maximum thickness of mortar in one layer permissible is 12mm."

        ]
    },
    {
        "id": "2",
        "name": "HutebMICRO 2A",
        "cat": "Rapid setting liquid material for fast plugging",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/2.png",
        "longdescription": "Ready to use the waterproofing liquid. W hen mixed with cement sets in 30 40 seconds to seal severe water",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Rock masonry and Manholes",
            "Joint filling, pointing between concrete segments in concrete and brick tunnels, sewage systems, pipes and mines",
            "Stops active water or seepage under pressure through joints, cracks and holes in concrete or masonry, where a normal mortar would be washed away",
            "In construction joints",
            "For instant sewer connections"

        ],
        "tab2data": [
            "The use of HUTEBMICRO 2A enables the stemming of severe water infiltration or outflow in mines, water reservoirs, manholes etc.",
            "In water retaining structure damage condition, it acts as emergency water stopping Excellent bond to the substrate where applied.",
            "It produces low exothermic heat, which reduces thermal cracking.",
            "Contains no chloride admixtures."

        ],
        "tab3data": [
            "Surfaces should be thoroughly cleaned, roughened and washed with fresh, clean water to remove any dirt, debris, loose particles or contaminants. Level off any sharp surface protrusions.",
            "Cracks and fissures may need to be enlarged to increase the bond. ",
            "Chasing out to achieve a slight dovetail effect is ideal.",
            "Place HUTEBMICRO 2A into a rubber bowl and then add the fresh cement. Stir briefly for a few seconds.",
            "Form the paste by hand into a tapered plug and place it immediately into the hole pressing firmly for 30-40 seconds until hard.",
            "After application of the paste, it should be covered with a splatter coat of cement-rich mortar containing coarse sand if a subsequent coating of waterproof plaster or gunite is to be applied.",
            "In areas of medium to heavy water infiltration, plastic tubing should be fitted into the wall at appropriate.",
            "Positions and left protruding through the render. This will alleviate any back pressure until the render has fully hardened."
        ]
    },
    {
        "id": "3",
        "name": "HUTEB PU- 200",
        "cat": "Flooring",
        "catid": 3,
        "shortdescription": "",
        "imagepath": "./img/products/3.png",
        "longdescription": "HUTEB PU-200 is a hydrophobic polyurethane-based foam resin used for injection into concrete structures exhibiting water seepages. It is a single-component hydrophobic resin that reacts to form a closed-cell, semi-rigid, non-corrosive foam when it comes in contact with water. It provides an extended working time to ensure complete penetrability into the injected elements without premature foaming. It stops water seepages through concrete structures such as basement retaining walls, water supply facilities, tanks, cooling towers, sewage treatment plants, lift/elevator wells, and slab/raft construction joints. It is injected using appropriate high-pressure injection equipment from the negative side.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "For permanent watertight sealing in concrete, brickworks and natural stones.   "
        ],
        "tab2data": [
            "Non-shrink grout",
            "Good penetration into cracks",
            "Chemical resistance",
            "Long-lasting",
            "Solvent-free eco friendly"
        ],
        "tab3data": [
            "Identify the area to be injected.",
            "Install injection packers of suitable diameter and length.",
            "Ensure injection packers are tightly installed to avoid packer failure during the injection process. If required, seal packers using quick-setting cement or epoxy-based putty.",
            "Feed the resin into the pump and commence injection.",
            "The type of element, effective water head, packer spacing and other factors shall govern injection pressure.",
            "For injection below the raft slab, grade slab, and retaining walls, inject in intermittent batches and observe the effect.",
            "Avoid large-volume injections in a short period."
        ]
    },
    {
        "id": "4",
        "name": "HUTEB KOTE ( LIQUID PRIMER )",
        "cat": "Waterproofing",
        "catid": 5,
        "shortdescription": "",
        "imagepath": "./img/products/4.png",
        "longdescription": "HUTEBKOTE is an aliphatic acrylic blend PRIMER waterproofing system. It is an acrylic-based liquid membrane, easy to apply with the help of a brush/roller. It provides a highly resistive surface to harsh weather, which ultimately provides warranted waterproofing of the substrate with thermal UV and natural-element resistance properties.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "All PCC, RCC, EPDM, PVC, bitumen and asphalts felt like waterproofing paints.",
            "The precast concrete structure, roofs, balconies, terraces and verandas",
            "Waterproofing of bridge decks, tunnels, stadium stands, and water tanks.",
            "Marine structures and structures suffering harsh environments near the sea etc.",
            "Excellent for the concrete roof, leaking brick and masonry walls."
        ],
        "tab2data": [
            "Minimum surface preparation needed low labour costs",
            "UV resistance and aromatic properties",
            "Applied directly to the damp concrete and masonry Excellent adhesion bonds to porous and nonporous surfaces Non-toxic-ideal for potable water tanks",
            "Excellent for damp-proofing basements",
            "Allows transmission of water vapour from the interior of the building",
            "Excellent for the concrete roof, leaking brick and masonry walls"
        ],
        "tab3data": [
            "Clean all the surfaces to the sound base, which will be treated with HUTEBKOTE. Remove dust, oil laitance-any other chemicals, oil etc.",
            "Fill the cracks if present on the substrate properly. Mix HUTEBKOTE well before use.",
            "Apply the mix with the help of a brush on the prepared surface.",
            "After the first coat is dry, apply 2nd coat immediately to get better adhesion between the two coats.",
            "Allow the coating for a full cure until 24 hours.",
            "In areas subjected to moderate and heavy loads/hydrostatic pressure, a minimum 1mm thickness coating is recommended. For further information, you can contact Huteb expert team."
        ]
    },
    {
        "id": "5",
        "name": "HUTEBSMARZ",
        "cat": "Waterproofing",
        "catid": 1,
        "shortdescription": "",
        "imagepath": "./img/products/372x560.png",
        "longdescription": "HUTEBSMARZ advanced is an acrylic-modified elastomeric waterproofing system for exterior horizontal and vertical surfaces. It is a 1K acrylic-based liquid membrane, easy to apply with the help of a brush/roller. It has excellent properties to withstand the pressure of up to 3 bars of positive waterproofing pressure on a vertical surface and 5 bars of positive waterproofing pressure on a horizontal surface.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Waterproofing on roofs",
            "Waterproofing of balconies, terraces and verandas",
            "Waterproofing of all types of old and new concrete",
            "Waterproofing and protection of concrete construction like bridge decks, tunnels, the stadium stands etc."
        ],
        "tab2data": [
            "Low water vapour transmission: It helps to maintain the temperature in and outside of the buildings as it has excellent UV resistance properties.",
            "Ease in the application and can be directly applied to the damp concrete and masonry and provide",
            "Excellent adhesion bonds to porous and non-porous surfaces. Excellent for concrete roofs, leaking brick and masonry walls",
            "Eco-Friendly: Non-toxic-ideal for potable water tanks and another food manufacturing industrial masonry.",
            "Ancarbonaon properties: Good resistance to Carbon dioxide and Chloride ion diffusion",
            "No-toxic content: Lead, arsenic, and mercury-free liquid support a green environment.",
            "Water-based."
        ],
        "tab3data": [
            "Clean all the surfaces to the sound base, which will be treated with HUTEBSMARZ advanced. Remove dust, oil, laitance, any other chemicals, oil etc.",
            "Fill the cracks if present on the substrate with HE-200 properly.",
            "Priming of the substrate must be done with HUTEBKOTE because priming the surface before waterproofing will provide beer adhesion to the substrate and increase the durability of the waterproofing system.",
            "Mix HUTEBSMARZ advanced well before use.",
            "Apply the mix with the help of a brush on the prepared surface.",
            "Aer first coat dry, apply 2nd coat immediately to get beer adhesion between the two coats.",
            "Allow the coating for a full cure until 24 hours.",
            "In areas subjected to moderate and heavy loads/hydrostatic pressure, a minimum 1mm thickness coating is recommended. For further information, you can contact Huteb expert team."
        ]
    },
    {
        "id": "6",
        "name": "SEAL-TECH",
        "cat": "Waterproofing",
        "catid": 1,
        "shortdescription": "",
        "imagepath": "./img/products/6.png",
        "longdescription": "Seal-Tech is a 100% reactive organosilane Nano-sealer that becomes an integral part of the structure. It is water dilutable, safe, sprayable and easy to apply. It is 18 to 20 mm deep “Skin” to your building. The peel-off issues are eliminated as Seal-Tech is non-leachable & UV-resistant. Complete drying is critical to complete the reaction and achieve water resistance. The surface tension of the hydrophobic surface created by SEAL-TECH will ensure that water molecules that stay in droplets will not enter into nanopores of the cementitious surface. Water infiltration causes seepage, leading to cement/plaster / concrete surfaces cracking, efflorescence, rebar corrosion and fungal growth. Most seepage control and water seepage repair chemicals have failed because they interact with the surfaces only from the outside by forming a protective layer. The best and most cost-effective seepage solution is treating surfaces and micro-cracks and making the structure waterproof, with deep penetration. The water-soluble ability of Seal-Tech enables the treatment of surfaces at micro and nano levels through a chemical reaction. These micro and nano-level reactions ensure that the seepage control is achieved with tremendous success. For substrates with oil, grease, fungal growth etc., clean and dry the surface thoroughly before application. SEAL-TECH should be diluted with potable water to obtain a clear transparent solution.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    },
    {
        "id": "7",
        "name": "STRONGBOND",
        "cat": "STRONGBOND FLEXBLE,ACRYLIC WATERPROFFING COSTING FOR TERRANCE",
        "catid": 5,
        "shortdescription": "",
        "imagepath": "./img/products/7.png",
        "longdescription": "STRONG BOND is a high-performance terrace waterproofing coating system composed of specially developed elastic and resilient acrylic polymers, graded fillers, and additives, the best quality fungicidal in water medium. It is used as liquid applied waterproofing membrane for all building terraces, especially for construction joints. STRONG BOND is designed to bridge shrinkage cracks. It provides a seamless, flexible waterproof coating suitable for terraces. The product provides a tough, durable water resistant coating that can withstand light pedestrian traffic and excellent weather resistance for exterior applications.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Expansion joints, Metal-Concrete Joints, Building roofs / Terraces - Flat and Sloping.",
            "Over existing cementitious waterproofing treatments like brickbat coba, concrete screeds, acrylic coatings etc."
        ],
        "tab2data": [
            "Provides quite efficient protection for construction joints.",
            "Impermeable to water (without pressure) (prevent penetration of water) but at the same time permeable to water vapour.",
            "High resistance to the effect of long-term weathering,",
            "Durable in all climate conditions, including UV attack.",
            "Flexible, with thermal expansion similar to concrete.",
            "Excellent bond to concrete and masonry.",
            "Good crack accommodation capacity.",
            "It can be done on existing IPS on the terrace."
        ],
        "tab3data": [
        ]
    },
    {
        "id": "8",
        "name": "HE 53 - BM 64",
        "cat": "FIRE STOP BARRIER MORTAR",
        "catid": 5,
        "shortdescription": "",
        "imagepath": "./img/products/8.png",
        "longdescription": "HE 53 — BM 64 is a Single Component non — combustible Asbestos-free fire stop barrier designed for 3 (three) hour fire rating. Used as a fire stop barrier for areas including electrical cable penetrations and cable bulkheads & has 20 years life expectancy.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Permanent fire seal for cables, cable trays and non-combustible pipes",
            "FOR USE WITH: Concrete and masonry assemblies & galls, and floors rated up to 3 hours",
            "EXAMPLES: Large openings containing multiple steel, conduit & EMT pipes (Electrical Metallic tubing).",
            "Large openings with single or multiple cable tray applications"
        ],
        "tab2data": [
            "Quick-setting",
            "It can be used in horizontal or vertical applications",
            "Saves time",
            "Versatile",
            "Single Component & simple mixing",
            "No effect due to vibration, impact and radiation",
            "Mechanically strong and can bear drop loads",
            "Maintenance free"
        ],
        "tab3data": [
            "Clean penetration. Pre-moisten sides of penetration.",
            "Important! First, add clean water to separate containers. Then slowly add ‘HE 53 ~ BM 64' to water while stirring by hand or power mixer to ensure a smooth, lump-free mix.",
            "Work prepared mortar into the opening by troweling or pouring (more water to be added than troweling). Use forms for large openings."
        ]
    },
    {
        "id": "9",
        "name": "HE3015- HT COAT SG 300",
        "cat": "High Tempreture Coating",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/9.png",
        "longdescription": "HE 301S- HT COAT SG 300 is a Single-Pack, self-priming, high-temperature resistant coating based on GCP.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "‘HE 301S- HT COAT SG 300’ protects the metal components & structures in the most aggressive conditions at elevated temperatures."
        ],
        "tab2data": [
            "SURFACE PREPARATION: All surfaces to be coated should be clean, dry and free from contamination. Before paint application, all surfaces should be assessed and treated by ISO 8504.",
            "Surface conditions: The temperature of the substrate is a Minimum of 3°C above the dew point of the air temperature. Relative humidity Maximum 80 % measured in the vicinity of the substrate. Ventilation - Good ventilation is required in confined areas to ensure proper drying. Do not use heated air until the solvents (Thinner) have evaporated (flashed off) from the paint film to avoid surface drying and solvent entrapment. During the application and the initial drying of the coating, the object should not be exposed to high humidity as this can result in loss of gloss."
        ],
        "tab3data": [
            "Spray - Use Airless Spray or Air Assisted Spray",
            "Brush: Recommended for stripe coating and small areas; care must be taken to achieve the specified dry film thickness.",
            "Roller: May be used for small areas; however, when using roller application, sufficient material must be applied to achieve the specified dry film thickness."
        ]
    },
    {
        "id": "10",
        "name": "HE 51 FIRE RETARDANT COATING",
        "cat": "Fire retardant Coating",
        "catid": 5,
        "shortdescription": "",
        "imagepath": "./img/products/10.png",
        "longdescription": "HE 51 Fire Retardant Coating’ is a one-part non- flammable water-based coating similar in appearance to ordinary latex-based paint for protecting any solid surface, including electric power cables & junction boxes, against ignition & propagation of fire.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Areas to be protected must be dry, clean & free from oil",
            "Before application, the product must be thoroughly stirred.",
            "The coating must be applied with a brush or roller or using airless spray equipment. If necessary, the product will have to be diluted with water depending on the application method."
        ],
        "tab2data": [
            "The current rating of the coated electrical cables is not reduced.",
            "Dripping or dropping of burning cable fragments is limited in amount and time, depending on the kind and intensity of the fire.",
            "Escape routes and power supply can be used for a longer time.",
            "Flame spread on cables and insulating damage is delayed in the case of prolonged exposure to fire.",
            "Significant extension of the operative condition of cables."
        ],
        "tab3data": [
            "HE 51 Fire Retardant Coating’ Fire suppression coating specially designed for protecting against ignition, propagation of fire, smoke emission in:",
            "Electric power cables",
            "Communication cables",
            "Junction boxes",
            "Any solid surface where water-based paint can be applied (White colour)"
        ]
    },
    {
        "id": "11",
        "name": "HE 3015 -HT COAT SG 600",
        "cat": "Coating",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/11.png",
        "longdescription": "‘HE 301S- HT COAT SG 600’ is a Single-Pack, self-priming, high-temperature resistant coating based on GCP.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "SURFACE PREPARATION: All surfaces to be coated should be clean, dry and free from contamination. Before paint application, all surfaces should be assessed and treated following ISO 8504.",
            "SURFACE CONDITIONS: The temperature of the substrate— Minimum 3°C above the dew point of the air temperature. Relative humidity — Maximum 80 % measured in the vicinity of the substrate. Ventilation - Good ventilation is required in confined areas to ensure proper drying. Do not use heated air until the solvents (Thinner) have evaporated (flashed off) from the paint film to avoid surface drying and solvent entrapment. During the application and the initial drying of the coating, the object should not be exposed to high humidity as this can result in loss of gloss."
        ],
        "tab2data": [
            "Spray - Use Airless Spray or Air Assisted Spray",
            "Brush: Recommended for stripe coating and small areas; care must be taken to achieve the specified dry film thickness.",
            "Roller: May be used for small areas; however, when using roller application, care must be taken to apply sufficient material in order to achieve the specified dry film thickness."
        ],
        "tab3data": [
        ]
    },
    {
        "id": "12",
        "name": "HUTEB 50-RUST CONVERTER",
        "cat": "Anti Corrosive Coating",
        "catid": 4,
        "shortdescription": "",
        "imagepath": "./img/products/12.png",
        "longdescription": "'HUTEB 50 RUST CONVERTER' chemically reacts and converts rust into a stable, black protective polymeric coating that is an excellent primer for oil and epoxy-based paints. No more sandblasting, heavy scraping, wire brushing, or grinding. HUTEB 50 RUST CONVERTER depends on a layer of rust being present to be effective. Rust Converter acts in three ways: 1. Inactivates existing rust: The unstable ferric hydroxide, formed at the start of the corrosion process of iron, is transformed into an inert complex, halting the corrosion process immediately. 2. Formation of a passive protective coating: The formed complexes combine with the unique resin in Rust Converter, creating a non-permeable coating, providing anti-corrosion protection. 3. Function as a primer: The cured dark grey protective coating has an ideal structure and composition to act as a primer for future cosmetic over-painting.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Apply only when temperatures are between 12°C and 45°C. Remove dirt, grease, oil and other contaminants creating a non-permeable coating providing anti-corrosion protection.",
            "Remove blistered or loose paint and lose rust scale.",
            "The use of rubber gloves is recommended.",
            "Shake and stir well before using.",
            "Pour the estimated amount needed into a clean container.",
            "Material cannot be returned to the original container after use. Work product into rusted surfaces with a synthetic bristle brush for maximum penetration.",
            "For large areas, use a roller or an airless sprayer. Apply a 2nd coat soon after the first coat has dried (20-30 minutes). Apply in a cross direction of the 1st coat. For best results, apply two thin coats.",
            "Allow a minimum of 24-hour cure time before painting over with a finish coat.",
            "Clean all painting equipment immediately after use with warm water and mild detergent."
        ],
        "tab2data": [
            "No more scraping or sandblasting. Remove loose Rust and then apply the product. Neutralizes Rust and converts it to a tough black primer in one easy step.",
            "Prevents Future Rusting. Seals out moisture and other outside elements.",
            "Fast Drying. A second coat can be applied in 20 to 30 minutes.",
            "Excellent Primer. Treated surfaces can be painted over with an oil-based paint."
        ],
        "tab3data": [
        ]
    },
    {
        "id": "13",
        "name": "HUTEB 19- KONCRETE PUTTY",
        "cat": "PU MODIFIIED CEMENTITIOUS FLOOR SCREED FOR REPAIIR Road Repairs Water Proofing",
        "catid": 3,
        "shortdescription": "",
        "imagepath": "./img/products/372x560.png",
        "longdescription": "‘HUTEB19 - KONCRETE PUTTY is a four-component urethane-modified cementitious flooring repair system formulated to withstand harsh and demanding environments. It combines the most demanding performance characteristics, resistance to impact, abrasion, chemicals and thermal attack. A PU binder combines Portland cement and graded aggregates to deliver superior performance characteristics. It can also be installed with an integral cove base for areas requiring sanitary seamless wall-to-floor transition.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "CURE: Functional cure is achieved in 3 hours with a full cure after 4 hours at 30°C. It is possible to reach a ‘walk-on’ cure at elevated temperatures in 2 hours.",
            "SURFACE PREPARATION: Proper surface preparation is essential to the success and performance of ‘HUTEB19 ~ KONCRETE PUTTY. In all cases, the application surface must be sound, rough, clean, oil-free and dry.",
            "NEW POURED CONCRETE: It should be allowed to cure fully (28 days @ 21°C) before application. If a curing membrane was used, it must be removed by sanding or etching with a strong detergent. If no curing membrane was used, the surface should be etched using an environmentally safe acid etch.",
            "OLD CONCRETE: Application procedures are the same as for new concrete, except it is essential to clean the surface thoroughly. Use HUTEB~Non Chlorinated Kleaner/ HUTEB-Kleaner Degreezer spray to remove grease and oils. All loose or unsound concrete should be removed by suitable mechanical means such as chipping, scarifying, shot blasting, sanding or grinding.",
            "PREVIOUSLY COATED CONCRETE: Applications should be considered short-term because the coating system is only as strong as the weakest component in the system. Paint that is peeling or degrading should be removed completely by sanding or using ‘MRO 1017 - Paint Remover’ If the paint is intact, the surface should be cleaned thoroughly with a strong detergent sanded lightly to remove the gloss. Any areas where the finish has worn down to the original concrete should be treated as bare concrete. A spot test should be made to ensure that ‘HUTEB19 ~ KONCRETE PUTTY will bond to the old surface.",
            "MIXING: Pour part B into part A and mix for about two minutes, carefully mixing the material from the bottom and sides of the container. Then mix part D into the liquid using a power tool until a uniform texture is obtained. Mix parts A, B, and C.",
            "&D until a uniform colour is obtained. If mixing indoors, adequate ventilation should be available."
        ],
        "tab2data": [
            "It can be used for versatile applications as it has excellent adhesion to various substrates ~ concrete, quarry tiles, brick pavers and plywood.",
            "Easy and quick to install",
            "It can be used in occupied areas due to very low odour & Zero VOC",
            "Long-lasting repair due to excellent impact and abrasion resistance"
        ],
        "tab3data": [
            "Spread mixed 'HUTEB19 ~ KONCRETE PUTTY over the application surface by pouring. To apply HUTEB19 KONCRETE PUTTY with a trowel, add more of part D."
        ]
    },
    {
        "id": "14",
        "name": "HUTEB 30- CHEMPRO",
        "cat": "NOVOLAC RESIIN BAESD CHECMICAL RESSITANT COASTING Chemical Resistant Coating",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/14.png",
        "longdescription": "HUTEB30 ~ CHEMIPRO is a two-pack, ultimate chemical resistant and corrosion protecting high-build solvent-free novolac epoxy coating for steel, brick and concrete. Novolac functionality and high cross-linking density in HUTEB30- CHEMIPRO makes it a barrier coating or lining suitable in applications where acids, alkalis, organic solvents, or several chemicals are used in the process.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "SURFACE PREPARATION: All surfaces to be coated should be clean, dry and free from contamination. Prior to paint application all surfaces should be assessed and treated in accordance with ISO 8504:2000. Where necessary, remove weld spatter and where required smooth weld seams and sharp edges. Oil or grease should be removed with, DEGREEZER.",
            "Abrasive Blast Cleaning: This product must only be applied to surfaces prepared by abrasive blast cleaning to Sa 2 1/2 (ISO 8501-1:2007) or SSPC-SP10. A sharp, angular surface profile of 50-75 microns (2-3 mils) is recommended. ,HUTEB30 - CHEMIPROE must be applied before oxidation of the steel occurs. If oxidation does occur the entire oxidized area should be re-blasted to the standard specified above. Surface defects revealed by the blast cleaning process should be ground, filled or treated in the appropriate manner."
        ],
        "tab2data": [
            "High temperature and chemical resistant high build coating",
            "No VOC. 100 % solids superior Novolac polymer system",
            "Excellent cathodic disbondment characteristics Excellent wastewater and sulphuric acid resistance",
            "Suitable for pipeline operating temperatures to 120°C Resistant to thermal shocks and freeze-thaw cycles",
            "Abrasion and corrosion resistant",
            "Resistant to seawater",
            "It can be applied directly on the prepared substrate without using a primer",
            "Smooth, glossy, easy-to-clean surface",
            "Easy-to-apply solvent-free formulation makes it suitable for use in confined spaces",
            "Application DFT up to 1000 p in the single coat"
        ],
        "tab3data": [
            "AVAILABLE PACKAGING 5 Kg (Part A 4 Kg & Part B 1 Kg Containers) Case Packing: 4 Numbers",
            "Precaution: Please refer to Material Safety Data Sheets (MSDS) before using this product for complete safety and handling information.",
            "SHELF LIFE & STORAGE: HUTEB30 - CHEMIPRO has a shelf life of 3 years if kept in a dry, air-conditioned store between 5°C and 30°C in the original, unopened containers."
        ]
    },
    {
        "id": "15",
        "name": "HUTEB 31- CHEMIPRO CRC",
        "cat": "SINGLE PACK CHECMICAL RESITANCE COATING",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/372x560.png",
        "longdescription": "'HUTEB31 CHEMIPRO CRC’ is a SINGLE-PACK, chemical resistant, high-performance finish coat suitable to be applied to the substrates needing resistance to corrosive chemicals in varied climatic conditions.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "SURFACE PREPARATION: All surfaces to be coated should be clean, dry and free from contamination. Before paint application, all surfaces should be assessed and treated by ISO 8504: 2000. Where necessary, remove the weld spatter and, where required, smooth weld seams and sharp edges.Oil or grease should be removed with ‘HUTEB 1011 - KLEANER DEGREEZER.'",
            "SURFACE CONDITIONS: Temperature of the substrate Minimum 3°C above the dew point of the air temperature Relative humidity ~ Maximum 50% measured in the vicinity of the substrate.",
            "Ventilation - Good ventilation is required in confined areas to ensure proper drying.",
            "Do not use heated air until the solvents (Thinner) have evaporated (flashed off) from the paint film to avoid surface drying and solvent entrapment. During the application and the initial drying of the coating, the object should not be exposed to high humidity as this can result in loss of gloss."
        ],
        "tab2data": [
            "It can be applied directly on the prepared substrate without using a primer Excellent Chemical Resistant",
            "Excellent Corrosion Resistant",
            "Quick Drying",
            "Excellent Resistance to Abrasion",
            "Excellent Resistance to Oils at elevated temperatures.",
            "Excellent Outdoor Stability"
        ],
        "tab3data": [
            "Spray -Use Airless Spray or Air Assisted Spray",
            "Brush- Recommended for stripe coating and small areas; care must be taken to achieve the specified dry film thickness.",
            "Roller- May be used for small areas; however, when using roller application, care must be taken to apply sufficient material to achieve the specified dry film thickness."
        ]
    },
    {
        "id": "16",
        "name": "HUTEBKOTE GP 120+",
        "cat": "Anti Corrosive Coating",
        "catid": 4,
        "shortdescription": "",
        "imagepath": "./img/products/16.png",
        "longdescription": "Hutebkote GP 120+ is a low VOC, high build, surface tolerant, anticorrosive coating for steel substrates. It is a next-generation high-solid coating which can be applied Direct To Metal (DTM). Itis pigmented with a blend of aluminium flakes & lamellar Micaceous Iron Oxide (MIO) pigments for improved corrosion resistance.",
        "tab1": "Uses",
        "tab2": "Benefits",
        "tab3": "Instructions",
        "tab1data": [
            "Surface Preparation: Surfaces should be clean and free from oils, grease, loosely adhering deposits and visible moisture. Surfaces should be prepared by mechanical wire brushing, grinding or high pressure water jetting (typically 5000 psi) to achieve SSPCSP2/ SP3 ISO 8501-4 St 2-St 3 taking particular care when cleaning badly pitted surfaces. Previously coated surfaces should be abraded using 180 grade emery paper. Any loosely adherent coating must be removed and surrounding areas feather edged. Where blast cleaning is possible surfaces should be prepared to NACE No 3/SSPC-SP6, ISO 8501-1 grade Sa2 or equivalent.",
            "Product Mixing: ‘The product is a two-component system comprising Part A component and Part B component which must be mixed together prior to use both components should be thoroughly stirred to incorporate any slight separation prior to mixing. Whilst continually stirring Part A, Part B component should be slowly added with mixing continuing until completely homogeneous. The mixed material must be used within 3 Hrs at 25°C (77°F). This time will be reduced at higher temperatures and extended at lower temperatures.",
            "Application: The minimum temperature for application is 5°C. Cure time will be significantly longer when application temperatures are below 5°C. The application should not be carried out when humidity exceeds 90% or when the surface is to be coated less than 3°C above the dew point.",
            "All loose rust, mild scale, and loosely adherent coatings must be removed. Ideal surface preparation methods are high-pressure water jetting, mechanical wire brushing, needle guns, mechanical grinders, etc. Surfaces that can be abrasive blast cleaned should be prepared to a minimum standard of Sa 2 BS7079:Part A1 1989 or equivalent. All oil and grease must be removed by the use of Hutebkote Thinners or degreasers or as recommended by our service representative.",
            "The material should be applied by brush spray or roller. Clean all equipment immediately after use with recommended Thinners",
            "Packaging and Storage: Supplied in 40 Ltr unit, Use within 24 months of the date of manufacture. Store in original sealed containers between 5°C and 35°C."
        ],
        "tab2data": [
            "Corrosion and Chemical resistance: Excellent even in severe Industrial. Harsh marine environment. (ISO 12944C-51&C-5M)",
            "It is designed for application by brush, spray or roller",
            "Is suitable for application on mechanically prepared steelwork or high pressure water cleaned steel, also suitable for application on an abrasive blasted surface.",
            "Can be applied on existing coating.",
            "It can be used as two-coat primer/finish coat system or overcoated with a variety of topcoats",
            "Temperature Resistance: Dry service temperature range upto 100°C"
        ],
        "tab3data": [
            "Ensure the surface to be coated is clean, dry and free from contaminations",
            "Clean steel surfaces to ISO 8501- 4: St2 / St3, or ISO 8501:1, Grade SA2%",
            "Apply Hutebkote GP 120+ at the specified thickness.",
            "Allow curing",
            "Visually or electrically inspect the coating for defects",
            "Repair all defects."
        ]
    },
    {
        "id": "17",
        "name": "HUTEBKOTE URETHANE COAT 870",
        "cat": "Chemical Resistant Product",
        "catid": 2,
        "shortdescription": "",
        "imagepath": "./img/products/17.png",
        "longdescription": "<b>Hutebkote Urethane Coat 870</b> has been developed to provide a durable gloss finish for use as the final coat of 3M coating systems in the constructions and transport industries where ease of removal of graffiti is required.",
        "tab1": "Product Features",
        "tab2": "Application Steps",
        "tab3": "Application Procedure",
        "tab1data": [
            "Hutebkote Urethane Coat 870 combines good application characteristics with excellent gloss and color retention.",
            "Hutebkote Urethane Coat 870 is suitable for use in corrosion protection applications.",
            "<b>Abrasion:</b> Good resistance to abrasion and mechanical damage.",
            "<b>Adhesion:</b> Excellent on correctly prepared and primed surfaces.",
            "<b>Chemical Resistance:</b> The fully cured coating offers excellent resistance to aqueous solutions, Oils, fats, and a wide range of industrial chemicals.",
            "<b>Temperature Resistance:</b> Dry service temperature range upto 100°C"
        ],
        "tab2data": [
            "Ensure coated surface is clean, dry, and free from contaminations,",
            "Apply Hutebkote Urethane Coat 870 at the specified thickness.",
            "Allow curing.",
            "Visually or electrically inspect the coating for defects",
            "Repair all defects."

        ],
        "tab3data": [
            "<b>Surface Preparation:</b> All surfaces should be prepared and primed by the appropriate ‘SYSTEM RECOMMENDATION. Primed surfaces should be clean, dry, and free from contamination.<br/><br/><h2><b><u>Application Procedures</u></b></h2>",
            "<b>Mixing:</b> To ensure a homogenous mix, Part A (Base) should be stirred, then while continuing stirring, Part (Activator) should be added and thoroughly mixed.",
            "<b>Application:</b> Application should not be carried out when relative humidity exceeds 85% or the surface is coated less than 3°C above the dew point. The minimum temperature for application is 2°C.",
            "<b>Brush:</b> Good quality brushes should be used with even strokes, ensuring that the 3M Hutebkote Urethane Coating UV 840 is not over-brushed, leading to less than the specified coating thickness.",
            "<b>Roller:</b> Short pile mohair rollers are the preferred equipment for this application method. Hutebkote Urethane Coating UV 840 should be spread evenly with regular checks to Handling and Safety Precautions Hutebkote Urethane Coat 870 does not normally require thinning for brush/ roller application. Where thinning is required, Hutebkote recommended Thinners may be added.",
            "<b>Airless Spray:</b> Typical spray settings are as follows: Pump Ratio 45:1 or higher, Tip Size 0.013-0.015, Tip Pressure 2000 psi. Excessively high tip spraying pressure should be avoided. The minimum pressure at the pump conducive to good atomization should be used. Hutebkote Urethane Coat 870 may require adding up to 10% Hutebkote recommended Thinners for airless spray application. Conventional Spray: Most types of equipment are suitable. Needle Set Up 1.1 - 1.8mm. Hutebkote Urethane Coating UV 840 may require thinning by up to 25% Hutebkote recommends Thinners for conventional spray application.",
            "All equipment must be cleaned IMMEDIATELY after use with recommended Hutebkote Thinners.",
            "<b>Packaging and Storage:</b> Supplied in 24-liter kit units; use within 12 months of manufacture. Store in original sealed containers at temperatures between 5°C and 32°C."
        ]
    },
    {
        "id": "18",
        "name": "FIIRE /WELDIING BLANKET REX -369 V",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/18.png",
        "longdescription": "HUTEB Non-Asbestos, high-temperature safety blanket for protection against welding sparks and molten slags is made from a base fabric of high-temperature Ceramic Woven Fiber reinforced with/without SS wire for strength and stability. The surface of the base fabric (both sides) is chemically treated with a heat dispersant coating which increases its mechanical properties against splatters/slags and enhances its capability to resist high temperature, thus making the blanket extremely tough and last longer. <br/><br/>It Confirms: <br/><b>DIN 14155 Standards</b> <br/><b>DIN 4102 Standards</b>",
        "tab1": "Applications",
        "tab2": "Properties",
        "tab3": "Other",
        "tab1data": [
            "Common applications include welding spark protection blankets/ curtains, plumbers pads, fire protection, insulation mattress/jacket cover material, high-temperature fabric seals."
        ],
        "tab2data": [
            "Non Hazardous to Health",
            "No Toxic Components",
            "Rot Proof",
            "Incombustible",
            "High Strength",
            "Dimensionally Stable"
        ],
        "tab3data": [
            "Maximum Temperature: 1680 °C",
            "Chemically Inert with few exceptions over the entire 3-9pH range."
        ]
    },
    {
        "id": "19",
        "name": "HUTEB STYLE RI -198 CERAMIC ROPE TYPE : BRAIDED /TWISED",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/19.png",
        "longdescription": "HUTEB Ceramic Fibre Ropes are manufactured from high-temperature aluminosilicate-based ceramic fiber combined with SS304 / Inconel / fiberglass reinforcements. The product is white and odorless, suitable for high-temperature applications up to 2372°F (1300°C). Twisted or braided texture with excellent handling strength, ideal compressibility, and resilience, lightweight, low thermal conductivity, high-temperature stability, low heat storage, thermal shock resistant, fire and flameproof, chemical resistant, compatible with most corrosive chemicals, commonly used acid and alkali (exceptions are hydrofluoric, phosphoric acids and concentrated alkalis.",
        "tab1": "Type of Application",
        "tab2": "Properties",
        "tab3": "",
        "tab1data": [
            "Door Seals, Gasket and Flange seals, Expansion joint packings, Metal casting seals, insulation lagging of pipes, in boilers and furnaces linings."
        ],
        "tab2data": [
            "Temperature classification: 1300 °C",
            "Chemical composition: AI203: 42-46%, Si02: 54-58%",
            "Loss on ignition: 1.0%",
            "Density: 0.45 to 0.65 g /cc"
        ],
        "tab3data": [
        ]
    },
    {
        "id": "20",
        "name": "CERAMIC WOVEN TAPES RI -333",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/20.png",
        "longdescription": "Style RI - 333 Ceramic Fiber Tape is a narrow woven fabric manufactured from High-temperature alumina-silicate-based ceramic fiber reinforced with high-Temperature fiberglass. The product is white and odorless, suitable for high-temperature applications up to 2300°F / 1260°C.",
        "tab1": "Applications",
        "tab2": "Specifications",
        "tab3": "Other",
        "tab1data": [
            "Safety and protective insulation covers, strip curtains, and door seals.",
            "Insulation wrapping material for cable, wire, pipe, exhaust, etc.",
            "Gaskets, tadpole gasket, and other high-temperature insulation seals."
        ],
        "tab2data": [
            "Low thermal conductivity, low heat storage, high temperature stable, thermal shock resistant",
            "Fire and flameproof",
            "Chemical resistant, compatible with most corrosive chemicals, commonly used acid and alkali (exceptions are hydrofluoric, phosphoric acids, and concentrated alkalis)."
        ],
        "tab3data": [
            "<b>Temperature Range</b><br/> 1800 F / 982 C Continuous Use<br/> 2300 F / 1260 C Maximum<br/> Specific Heat (@2000 F): Btu/lb F",
            "<b>Available Sizes</b><br/> Width : 20mm to 150mm<br/> Thickness: 1.5mm to 6mm"
        ]
    },
    {
        "id": "21",
        "name": "CERAMIC WOVEN TAPES RI -369",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/21.png",
        "longdescription": "Ceramic fiber cloth is widely used as thermal insulation material in various industries. Woven from ceramic fiber yarns, these ceramic fiber cloths are quality tested for dust control. This cloth is an excellent heat-insulating material and a perfect alternative to asbestos cloth. The cloth, laminated with aluminum foil on one side, can be easily reinforced with either glass fiber yarn or metallic wire (stainless steel or nickel wire).",
        "tab1": "Applications",
        "tab2": "Specifications",
        "tab3": "",
        "tab1data": [
            "Heat Insulation Curtain",
            "Large Area Thermal Insulation",
            "Radiant Heat Shielding",
            "Flexible Fabric Expansion Join"
        ],
        "tab2data": [
            "<b>Temperature Classification:</b> 1260 C",
            "<b>Thickness:</b> 1.5mm to 6mm",
            "<b>Width:</b> 1000mm",
            "<b>Normal Packing:</b> 30m/roll"
        ],
        "tab3data": [
        ]
    },
    {
        "id": "22",
        "name": "SILICA CLOTH RI -603",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/22.png",
        "longdescription": "HUTEB Silica cloth is a high-performance textile fabric comprised of high purity, high strength amorphous silica fibers woven into a strong, flexible fabric designed for use where severe temperature conditions exist. The manufacturing process of HUTEB Silica cloth provides improved abrasion resistance against traditional silica fabrics and will not burn, rot, mildew, or deteriorate and resist most acids. It will keep a good state when it works at 1095°C for a long time.",
        "tab1": "Applications",
        "tab2": "Physical Properties",
        "tab3": "Sizes",
        "tab1data": [
            "Welding & Burning Safety Blankets & Curtains",
            "Stress Relieving Insulation",
            "Furnace High-Temperature Insulation",
            "Furnace Curtains",
            "Thermocouple Insulation",
            "Flange & Valve Covers",
            "High-Temperature Composites",
            "Fuel line insulation"
        ],
        "tab2data": [
            "Base: Fabric Silica",
            "Continuous Temperature: 1095 °C",
            "Melting Temperature: 1650 °C",
            "Abrasion Resistance: Very Good",
            "Si02 Content: 96%",
            "Minimum Weave: Satin Weave",
            "Thermal Conductivity",
            "W/mk (Btu in./hr/ft<sup>2</sup> °F): 0.3385",
            "Emissivity @1093 °C: 0.8"
        ],
        "tab3data": [
            "<b>Thickness:</b> 0.76mm & 1.3mm",
            "<b>Width:</b> 920mm, 1000mm, 1500mm"
        ]
    },
    {
        "id": "23",
        "name": "SILICA TAPES RI-639",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/23.png",
        "longdescription": "<p>A low-cost, convenient, field-installable solution to some of the most demanding high-temperature problems available in widths of 50 mm and 100 mm and thicknesses of 0.8 mm and 1.3 mm.</p><p>Huteb RI - 639 Silica Tape is a slit silica tape constructed from 96% pure SiO2 silica fiber, coated on one side with a pressure-sensitive adhesive backing that facilitates installation. The adhesive decomposes at high temperatures, leaving a perfectly tape-wrapped hose, cable, or pipe, and it also provides energy savings and personnel protection.</p><p>Suitable for use at 1800°F (982°C) and able to withstand short-term exposure up to 3000°F (1650°C), Huteb RI - 639 Silica Tape with adhesive sets the standard for flexibility and minimum lineal shrinkage under high heat conditions.</p><p>These tapes can be provided with heat-resistant vermiculite coating.</p>",
        "tab1": "Specifications",
        "tab2": "",
        "tab3": "",
        "tab1data": [
            "<b>Continuous Operating Temp.:</b> 1800° F (982° C)",
            "<b>Max. Short-Term Temp.:</b> 3000° F (1650° C)",
            "<b>Molten Metal Resistance:</b> Good",
            "<b>Flame Resistance:</b> Outstanding",
            "<b>Abrasion Resistance:</b> Moderate",
            "<b>Flexibility:</b> Excellent",
            "<b>Tensile Strength:</b> Good"
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    },
    {
        "id": "24",
        "name": "EXPEANDED PTEE JOINT SEALANT WITH ADHESIISVE RI -1003",
        "cat": "High Temperature",
        "catid": 6,
        "shortdescription": "",
        "imagepath": "./img/products/24.png",
        "longdescription": "Made from pure, mono-axially expanded, virgin PTFE, supplied with adhesive backing is a low-friction Fluoropolymer with outstanding chemical and weathering resistance. PTFE is stable at temperatures up to 260°C and is often used in high-temperature environments. PTFE also has excellent electrical insulating properties.",
        "tab1": "Applications",
        "tab2": "Physical Properties",
        "tab3": "Key Cheracteristics",
        "tab1data": [
            "<p>Expanded PTFE Tape can be used in a wide variety of static applications in nearly all industry sectors. The exceptional malleability of expanded PTFE can compensate for out-of-parallel and damaged sealing surfaces. This allows use with stress-sensitive connections and applications where only a limited flange load is available, e.g., plastic flanges, glass flanges, etc.</p><p>Typical applications are the sealing of flanges, pump housings, compressors, hand holes, and maintenance holes, air ducts, compensators, heat exchangers, and many more.</p>"
        ],
        "tab2data": [
            "Temperature range: - 240°C up to +260°C, with short excursions up to +310°C",
            "Chemical resistance: resistant against most chemicals from pH 0-14 — main exceptions are molten alkali metals and elemental fluorine at high temperatures and pressure",
            "Pressure resistance: vacuum up to 20MPa/200bar",
            "Density: 0.65g/cm3 +/- 0.1g/cm3 (for rectangular cross-sections only)",
            "Colour: White",
            "Others: Physiologically harmless. It has no smell or taste. It is neither contaminating nor toxic."
        ],
        "tab3data": [
            "Outstanding chemical resistance",
            "Extremely low friction",
            "Soft and formable",
            "Good bearing and wear properties (bearing grades)",
            "Good weathering resistance",
            "Performs well at elevated temperatures",
            "FDA-compliant grades available."
        ]
    },
    {
        "id": "25",
        "name": "ALGAE N MOSS REMOVER",
        "cat": "Cleaning Solution",
        "catid": 7,
        "shortdescription": "",
        "imagepath": "./img/products/25.png",
        "longdescription": "<p>MSC Algae N Moss Remover is a non-acidic, biodegradable cleaner specially designed for easy algae and moss removal from surfaces like natural stone, masonry, concrete, etc.</p><p>MSC Algae N Moss Remover technology acts over moss, algae, lichens, fungus, and other microorganisms and kills them. Its formula also acts on the spores of these organisms to maintain a clean surface for a longer period.</p><p><b>Suitable For:</b> Concrete | Masonry | Marble | Limestone | Travertine | Slate | Sandstone etc. </p><p><b>Uses:</b> Exterior | Walls | Floor </p><p><b>Cautions while application:</b><br/>Wear all kinds of protective measures like gloves and a mask while the application<br/>Wear old clothes as the product, if spilled accidentally, may alter the color of the clothes.<br/>Cover the surrounding things properly before application.</p><p><b>Storage:</b><br/>Best before the date mentioned on the batch.<br/>Care of Product: Technical Specification:<br/>Keep out of reach of children Color: Translucent<br/>Please don't keep it in direct sunlight. Service temperature: 8° to 35°C<br/>Tight-pack the container after use to maintain the product quality.</p><br/><p><b>Special note:</b><br/> The data above is agreed on the quality of the product at the time of production and checking the quality during approval. The data are controlled regularly as part of our quality assurance program. Neither these data nor the properties of the product specimen shall imply any legal binding of certain properties or fitness for a specific purpose. It is the user's responsibility to check the product's substrate and compatibility or suitability for the deemed application.</p><p>For further information or any query, please consult your local Huteb Engineers representative.</p>   ",
        "tab1": "Key Characteristics",
        "tab2": "Application",
        "tab3": "Surface Preparation",
        "tab1data": [
            "Deep cleaning action over most surfaces",
            "Effective in removing most microorganisms, including algae, moss, fungus, lichens, etc.",
            "Easy to use",
            "Cost-effective",
            "Biodegradable",
            "Non-bio-accumulative"
        ],
        "tab2data": [
            "<p>Test and patch the surface before application.</p>",
            "<p><b>Step 1: Spraying</b></br>Spray the product using a high-pressure sprayer on the surface, and cover the entire surface thoroughly.</p>",
            "<p><b>Step 2: Scrubbing</b><br/>As per requirement, manually scrub the surface to remove tough stains of algae, moss, fungus, etc.</p>",
            "<p><b>Step 3: Washing</b><br/> Wash the surface using cold water and let it air dry.</p>",
            "<p><b>Step 4:</b><br/> Difficult stains may require a reapplication</p>",
            "<p><b>Step 5:</b><br/> To keep the surface clean and moss and algae free, it may be covered with appropriate Huteb Engineers Seelers.</p>"
        ],
        "tab3data": [
            "Cover the surrounding areas properly.",
            "Cover the plants around as the product may damage them.",
            "Coverage may vary according to the porosity of the substrate."
        ]
    },
    {
        "id": "26",
        "name": "FIVE IN ONE CLEANER",
        "cat": "Cleaning Solution",
        "catid": 7,
        "shortdescription": "",
        "imagepath": "./img/products/26.png",
        "longdescription": "<p>Five in One Cleaner is a ready-to-use cleaner with excellent properties of cleaning the toughest stains of grease, oil, paint, etc. Its cleaning properties are designed to clean stains from natural stones and concrete.</p><p><b>Suitable For: </b> All kinds of natural stones | Concrete Surfaces | All kinds of metal surfaces</p><p><b>Uses: </b> Exterior | Walls | Floor</p><p><b>Storage: </b> Best before the date mentioned on the batch.</p><p><b>Care of Product: </b> Don't keep it in direct sunlight. <br/> Tight pack the container after use to maintain the product quality</p><p><b>Technical Specifications: </b> Color - Translucent White | Service Temperature - 8 C to 35 C</p>",
        "tab1": "Effective for",
        "tab2": "Key Characteristics",
        "tab3": "Application",
        "tab1data": [
            "Kitchen Stains like Grease",
            "Floor stains like dirt, oil",
            "Oven stains",
            "Latex paint",
            "Adhesives",
            "Inkspots",
            "And many others"
        ],
        "tab2data": [
            "Solubilizes many soils and stains",
            "Effectively cleans Natural stones",
            "Effectively cleans Concrete surface",
            "Effectively cleans Metals",
            "Easy to use",
            "Less time consuming",
            "Less manpower required",
            "Environment friendly",
            "Does not changes the color of the surface"
        ],
        "tab3data": [
            "<b>Step 1 Spraying:</b> Spray the product using a high-pressure sprayer on the surface, and cover the entire surface thoroughly.",
            "<b>Step 2 Scrubbing: </b> As per requirement, manually scrub the surface to remove tough stains of different soils.",
            "<b>Step 3 Washing: </b> Leave it for 5 to 10 minutes on the surface after applying.",
            "<b>Step 4:</b> Wash the surface using cold water and let it air dry.",
            "<b>Step 5:</b> Difficult stains may require reapplication.",
            "<b>Step 6:</b> Protect the surface from further stains; it may be covered with appropriate Huteb Engineers Sealers."
        ]
    },
    {
        "id": "",
        "name": "",
        "cat": "",
        "catid": 0,
        "shortdescription": "",
        "imagepath": "./img/products/0.png",
        "longdescription": "",
        "tab1": "Product Features",
        "tab2": "Application Steps",
        "tab3": "Application Procedure",
        "tab1data": [
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    },
    {
        "id": "",
        "name": "",
        "cat": "",
        "catid": 0,
        "shortdescription": "",
        "imagepath": "./img/products/0.png",
        "longdescription": "",
        "tab1": "Product Features",
        "tab2": "Application Steps",
        "tab3": "Application Procedure",
        "tab1data": [
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    },
    {
        "id": "",
        "name": "",
        "cat": "",
        "catid": 0,
        "shortdescription": "",
        "imagepath": "./img/products/0.png",
        "longdescription": "",
        "tab1": "Product Features",
        "tab2": "Application Steps",
        "tab3": "Application Procedure",
        "tab1data": [
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    },
    {
        "id": "",
        "name": "",
        "cat": "",
        "catid": 0,
        "shortdescription": "",
        "imagepath": "./img/products/0.png",
        "longdescription": "",
        "tab1": "Product Features",
        "tab2": "Application Steps",
        "tab3": "Application Procedure",
        "tab1data": [
        ],
        "tab2data": [
        ],
        "tab3data": [
        ]
    }
];