/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
import { ms } from "./ms.js";

// Initiating the symbol class
import Symbol from "./ms/symbol.js";
ms.Symbol = Symbol;

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */

import spaceletter from "./lettersidc/sidc/space.js";
ms.addSIDCicons(spaceletter, "letter");
import airletter from "./lettersidc/sidc/air.js";
ms.addSIDCicons(airletter, "letter");
import groundletter from "./lettersidc/sidc/ground.js";
ms.addSIDCicons(groundletter, "letter");
import equipmentletter from "./lettersidc/sidc/equipment.js";
ms.addSIDCicons(equipmentletter, "letter");
import installationsletter from "./lettersidc/sidc/installations.js";
ms.addSIDCicons(installationsletter, "letter");
import sealetter from "./lettersidc/sidc/sea.js";
ms.addSIDCicons(sealetter, "letter");
import subsurfaceletter from "./lettersidc/sidc/subsurface.js";
ms.addSIDCicons(subsurfaceletter, "letter");
import sofletter from "./lettersidc/sidc/sof.js";
ms.addSIDCicons(sofletter, "letter");
import signalsIntelligenceletter from "./lettersidc/sidc/signalsIntelligence.js";
ms.addSIDCicons(signalsIntelligenceletter, "letter");
import stabilityoperationsletter from "./lettersidc/sidc/stabilityoperations.js";
ms.addSIDCicons(stabilityoperationsletter, "letter");
import emergencymanagementsymbolsletter from "./lettersidc/sidc/emergencymanagementsymbols.js";
ms.addSIDCicons(emergencymanagementsymbolsletter, "letter");

// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
import std2525bletter from "./lettersidc/sidc/2525b-ch2.js";
ms.addSIDCicons(std2525bletter, "letter");

// Adding support for tactical points
import tacticalpoints2525letter from "./lettersidc/sidc/tactical-points-2525.js";
ms.addSIDCicons(tacticalpoints2525letter, "letter");
import tacticalpointsapp6letter from "./lettersidc/sidc/tactical-points-app6.js";
ms.addSIDCicons(tacticalpointsapp6letter, "letter");

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */

import airnumber from "./numbersidc/sidc/air.js";
ms.addSIDCicons(airnumber, "number");

import airmissilenumber from "./numbersidc/sidc/airmissile.js";
ms.addSIDCicons(airmissilenumber, "number");

import spacenumber from "./numbersidc/sidc/space.js";
ms.addSIDCicons(spacenumber, "number");

import spacemissilenumber from "./numbersidc/sidc/spacemissile.js";
ms.addSIDCicons(spacemissilenumber, "number");

import landunitnumber from "./numbersidc/sidc/landunit.js";
ms.addSIDCicons(landunitnumber, "number");

import landciviliannumber from "./numbersidc/sidc/landcivilian.js";
ms.addSIDCicons(landciviliannumber, "number");

import landequipmentnumber from "./numbersidc/sidc/landequipment.js";
ms.addSIDCicons(landequipmentnumber, "number");

import landinstallationnumber from "./numbersidc/sidc/landinstallation.js";
ms.addSIDCicons(landinstallationnumber, "number");

import seanumber from "./numbersidc/sidc/sea.js";
ms.addSIDCicons(seanumber, "number");

import subsurfacenumber from "./numbersidc/sidc/subsurface.js";
ms.addSIDCicons(subsurfacenumber, "number");

import minewarfarenumber from "./numbersidc/sidc/minewarfare.js";
ms.addSIDCicons(minewarfarenumber, "number");

import activitesnumber from "./numbersidc/sidc/activites.js";
ms.addSIDCicons(activitesnumber, "number");

import signalsintelligencenumber from "./numbersidc/sidc/signalsintelligence.js";
ms.addSIDCicons(signalsintelligencenumber, "number");

import cyberspacenumber from "./numbersidc/sidc/cyberspace.js";
ms.addSIDCicons(cyberspacenumber, "number");

import dismountedindividualnumber from "./numbersidc/sidc/dismountedindividual.js";
ms.addSIDCicons(dismountedindividualnumber, "number");

import tacticalpointsnumber from "./numbersidc/sidc/control-measure.js";
ms.addSIDCicons(tacticalpointsnumber, "number");

/* ***************************************************************************************
This draws the symbol octagon, can be good for debugging.
*************************************************************************************** */
//import debug from "./symbolfunctions/debug.js";
//ms.addSymbolPart(debug);

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
import path2d from "./ms/path2d.js";
ms._Path2D = path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;
