
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import './css/Faq.css';

 const FaqSection = () => {

const data = {
title: "",
rows: [
{
title: "Is there a vaccine for COVID-19?",
content: <p>Yes there are now several vaccines that are in use. 
    The first mass vaccination programme started in 
    early December 2020 and the number of vaccination
     doses administered is updated on a daily basis here. 
     At least 13 different vaccines (across 4 platforms) 
     have been administered.
<br/><br/>
The Pfizer/BioNtech Comirnaty vaccine was listed for WHO Emergency Use Listing (EUL) on 31 December 2020. The SII/Covishield and AstraZeneca/AZD1222 vaccines (developed by AstraZeneca/Oxford and manufactured by the State Institute of India and SK Bio respectively) were given EUL on 16 February. The Janssen/Ad26.COV 2.S developed by Johnson & Johnson, was listed for EUL on 12 March 2021. The Moderna COVID-19 vaccine (mRNA 1273) was listed for EUL on 30 April 2021 and the Sinopharm COVID-19 vaccine was listed for EUL on 7 May 2021. The Sinopharm vaccine is produced by Beijing Bio-Institute of Biological Products Co Ltd, subsidiary of China National Biotec Group (CNBG).</p>,
},
{
title: "When will COVID-19 vaccines be ready for distribution?",
content:<><p>
    The first COVID-19 vaccines have already begun to be introduced in countries. Before COVID-19 vaccines can be delivered:
</p>
<br/>
<p>he vaccines must be proven safe and effective in large (phase III) clinical trials.  Some COVID-19 vaccine candidates have completed their phase III trials, and many other potential vaccines are being developed.</p>
<br/>
<p>Independent reviews of the efficacy and safety evidence is required for each vaccine candidate, including regulatory review and approval in the country where the vaccine is manufactured, before WHO considers a vaccine candidate for prequalification. Part of this process also involves the Global Advisory Committee on Vaccine Safety.</p>
<br/>
<p>In addition to review of the data for regulatory purposes, the evidence must also be reviewed for the purpose of policy recommendations on how the vaccines should be used.</p>
<br/>
<p>An external panel of experts convened by WHO, called the Strategic Advisory Group of Experts on Immunization (SAGE), analyzes the results from clinical trials, along with evidence on the disease, age groups affected, risk factors for disease, programmatic use, and other information. SAGE then recommends whether and how the vaccines should be used.</p>
</>
},
{
title: "Can I have the second dose with a different vaccine than the first dose?",
content: <>
<p>Clinical trials in some countries are 
    looking at whether you can have a first
     dose from one vaccine and a second dose
      from a different vaccine.</p>

<p> There isn't enough data yet to recommend this type of combination. </p>

</>,
},
{
title: "Should I be vaccinated if I have had COVID-19?",
content:  <>
<p>Even if you have already had COVID-19, you should be vaccinated when it is offered to you.</p>
<br/>
<p>The protection that someone gains from having COVID-19 will vary from person to person, and we also don’t know how long natural immunity might last. </p>
<br/>

</>,
},
{
title: "Is the vaccine safe for children?",
content:  <>
<p>Vaccines are usually tested in adults first, and only later assessed in children when safety has been proven in adults, because children are still developing and growing. COVID-19 has also been a more serious and dangerous disease among older people. Now that the vaccines have been determined to be safe for adults, they are being studied in children.</p>
<br/>
<p>WHO's Strategic Advisory Group of Experts (SAGE) has concluded that the Pfizer/BionTech vaccine is suitable for use by people aged 12 years and above. Children aged between 12 and 15 who are at higher risk of severe COVID-19 may be offered this vaccine alongside other priority groups for vaccination. Vaccine trials for children are ongoing and WHO will update its recommendations when the evidence or epidemiological situation justifies a change in policy.WHO's Strategic Advisory Group of Experts (SAGE) has concluded that the Pfizer/BionTech vaccine is suitable for use by people aged 12 years and above. Children aged between 12 and 15 who are at higher risk of severe COVID-19 may be offered this vaccine alongside other priority groups for vaccination. Vaccine trials for children are ongoing and WHO will update its recommendations when the evidence or epidemiological situation justifies a change in policy.</p>
<br/>
<p>While the supply of vaccines is limited, the ongoing priority is to vaccinate those most at risk of serious illness who still have not been vaccinated in many parts of the world: older people, those with chronic health conditions, and health workers.</p>
<br/>
<p>Most children are at low risk of serious disease and vaccinating them is primarily about reducing transmission, which can also be achieved through public health measures, including: physically distancing from others, cleaning hands frequently, sneezing and coughing into their elbow, wearing a mask if age appropriate and avoiding crowded, poorly ventilated spaces.</p>
</>,
},



],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "#24ac75",
    rowTitleColor: "#072366",
    rowContentColor: '#79889e',
    arrowColor: "#072366",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};



    return (
        <>

      <div className="container faqa">

     <h1> Frequently Asked Questions On - COVID-19 Vaccine </h1>
<br/>
      <Faq
                data={data}
                styles={styles}
                config={config}
            />
      </div>

        </>
    )
}

export default FaqSection;