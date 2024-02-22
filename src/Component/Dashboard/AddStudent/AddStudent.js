import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
// import Form from "react-bootstrap/Form";
import { FaAddressCard, FaCalendarAlt, FaSchool, FaUser } from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddStudent = () => {
  return (
    <div>
      <div className="dashboard-layout ">
        <div className="inner-dash-bpx ">
          <header className="main-header login-header-home">
            <NavbarDashboard />
            <ScrollToTop />
          </header>
          <div className="dash-outer-box">
            <div className="row">
              <div className="col-md-12">
                <div className="pad-set register-border">
                  <div className="head-for-all-page">
                    <div>
                      <h3>ADD NEW STUDENT</h3>
                      <p>You can add new student Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-form mt-4 p-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaAddressCard />
                    </span>
                    <select
                      name="schoolCode"
                      className="form-select"
                      id="country-state"
                    >
                      <option value="">Select School Code</option>
                      <option value="">Select School Code</option>
                      <option value="IND23">IND23 - Others</option>
                      <option value="UAE444">
                        UAE444 - Shining Star International School, Abu Dhabi
                      </option>
                      <option value="UAE631">
                        UAE631 - Wise Indian Academy, Ajman
                      </option>
                      <option value="MR440">
                        MR440 - Meridian Public School, Hyderabad
                      </option>
                      <option value="AP918">
                        AP918 - International Delhi Public School, Amalapuram
                      </option>
                      <option value="BH973">
                        BH973 - Bahrain Indian School, Bahrain
                      </option>
                      <option value="KA558">
                        KA558 - National Public School, Kudlu, Bengaluru
                      </option>
                      <option value="BR398">BR398 - Junior 30, Ara</option>
                      <option value="BR221">
                        BR221 - Delhi World Public School, Patna
                      </option>
                      <option value="EDACY7-7127">
                        EDACY7-7127 - Career Guide Academy{" "}
                      </option>
                      <option value="CHRYN160">
                        CHRYN160 - RYAN International School, Chandigarh
                      </option>
                      <option value="DTRYN773">
                        DTRYN773 - ST. XAVIER’S SR. SEC. SCHOOL-ICSE, DHAMTARI
                      </option>
                      <option value="DURYN357">
                        DURYN357 - ST. XAVIER’S HIGH SCHOOL-ICSE, DURG
                      </option>
                      <option value="CG832">
                        CG832 - Sri Sankara Vidyalaya, Bhilai
                      </option>
                      <option value="RPRYN493">
                        RPRYN493 - RYAN INTERNATIONAL SCHOOL, RAIPUR
                      </option>
                      <option value="RPRYN492">
                        RPRYN492 - ST. XAVIER’S HIGH SCHOOL-ICSE, RAIPUR
                      </option>
                      <option value="UAE139">
                        UAE139 - Delhi Private School, Dubai
                      </option>
                      <option value="OR777">
                        OR777 - International Others
                      </option>
                      <option value="UAE884">
                        UAE884 - Pearl Wisdom School, Dubai
                      </option>
                      <option value="VH10301">
                        VH10301 - VIBGYOR High, Vadodara
                      </option>
                      <option value="BDRYN282">
                        BDRYN282 - RYAN INTERNATIONAL SCHOOL-ICSE, BARDOLI,
                        SURAT
                      </option>
                      <option value="ORRYN866">
                        ORRYN866 - RYAN International School, Olpad Road, Surat
                      </option>
                      <option value="VH10305">
                        VH10305 - VIBGYOR High, Surat
                      </option>
                      <option value="ADRYN173">
                        ADRYN173 - RYAN INTERNATIONAL SCHOOL, ADAJAN, SURAT
                      </option>
                      <option value="GJ435">
                        GJ435 - Delhi Public School, East Ahmedabad
                      </option>
                      <option value="VPRYN991">
                        VPRYN991 - ST. XAVIER’S HIGH SCHOOL-CBSE, KOPARLI ROAD,
                        VAPI
                      </option>
                      <option value="GJ785">
                        GJ785 - Young &amp; Pro, Surat
                      </option>
                      <option value="VH10305A">
                        VH10305A - VIBGYOR Kids, Surat
                      </option>
                      <option value="VH10301A">
                        VH10301A - VIBGYOR Kids, Vadodara
                      </option>
                      <option value="DRRYN664">
                        DRRYN664 - RYAN International School, Dumas Road, Surat
                      </option>
                      <option value="MEM1009">
                        MEM1009 - The Millennium School, Surat
                      </option>
                      <option value="HR114">
                        HR114 - Manav Rachna International School, Sector-21C,
                        Faridabad
                      </option>
                      <option value="HR010">
                        HR010 - Alpine Convent School, Sector-10, Gurugram
                      </option>
                      <option value="HR115">
                        HR115 - Manav Rachna International School, Sector-14,
                        Faridabad
                      </option>
                      <option value="HR111">
                        HR111 - Manav Rachna International School, Sector-46,
                        Gurugram
                      </option>
                      <option value="HR112">
                        HR112 - Manav Rachna International School, Sector-51,
                        Gurugram
                      </option>
                      <option value="HR156">
                        HR156 - Alpine Convent School, Sector-56, Gurugram
                      </option>
                      <option value="HR819">
                        HR819 - Sharda International School, Gurugram
                      </option>
                      <option value="APFA007">
                        APFA007 - Apeejay School, Faridabad
                      </option>
                      <option value="HR242">
                        HR242 - Alpine Convent School, Sector-38, Gurugram
                      </option>
                      <option value="HR099">
                        HR099 - G.D. Goenka Signature School, Sohna Road,
                        Gurugram
                      </option>
                      <option value="APSG001">
                        APSG001 - Apeejay Svran Global School, Faridabad
                      </option>
                      <option value="FRRYN121">
                        FRRYN121 - RYAN INTERNATIONAL SCHOOL, FARIDABAD
                      </option>
                      <option value="GGSEC031">
                        GGSEC031 - RYAN INTERNATIONAL SCHOOL, SECTOR 31,
                        GURUGRAM
                      </option>
                      <option value="HR854">
                        HR854 - Shalom Hills International School, Gurugram
                      </option>
                      <option value="HR106">
                        HR106 - Shalom Presidency School, Gurugram
                      </option>
                      <option value="GGSEC040">
                        GGSEC040 - RYAN INTERNATIONAL SCHOOL, SECTOR-40,
                        GURUGRAM
                      </option>
                      <option value="HR113">
                        HR113 - Manav Rachna International School, Charmwood
                      </option>
                      <option value="HR116">
                        HR116 - Manav Rachna International School, Noida
                      </option>
                      <option value="HR800">
                        HR800 - Delhi Public School, Sector-45, Gurugram
                      </option>
                      <option value="VH10904">
                        VH10904 - VIBGYOR High, Gurugram
                      </option>
                      <option value="APCD306">
                        APCD306 - Apeejay School, Charkhi Dadri
                      </option>
                      <option value="GGBSF369">
                        GGBSF369 - RYAN INTERNATIONAL SCHOOL, SOHNA ROAD,
                        GURUGRAM
                      </option>
                      <option value="HR222">
                        HR222 - G.D. Goenka Public School, Sector- 10 A,
                        Gurugram
                      </option>
                      <option value="EDACY7-7269">
                        EDACY7-7269 - The Millennium School, Kurukshetra
                      </option>
                      <option value="MEM1001">
                        MEM1001 - Millennium World School, Cheeka
                      </option>
                      <option value="GGSLM040">
                        GGSLM040 - RYAN Shalom Montessori, Gurugram
                      </option>
                      <option value="EDACY7-7273">
                        EDACY7-7273 - The Millennium School, Panipat{" "}
                      </option>
                      <option value="EDACY5-5016">
                        EDACY5-5016 - Gurukul Public Senior Secondary School
                      </option>
                      <option value="MMHK779">
                        MMHK779 - Miss Man International Education, Hong Kong
                      </option>
                      <option value="JK301">
                        JK301 - Aarifeen School of Excellence, Baramulla
                      </option>
                      <option value="UAE140">
                        UAE140 - The Winchester School, Jebel Ali
                      </option>
                      <option value="JH033">
                        JH033 - Mount Litera Zee School, Jamshedpur
                      </option>
                      <option value="EDACY7-7040">
                        EDACY7-7040 - Aditya Talent School, Hatsarganj
                      </option>
                      <option value="EDACY7-7061">
                        EDACY7-7061 - Navalok English Academy, Bhagalpur
                      </option>
                      <option value="KA100">
                        KA100 - Delhi Public School, East Bengaluru
                      </option>
                      <option value="KA633">
                        KA633 - MVJ International School, Bengaluru
                      </option>
                      <option value="KA271">
                        KA271 - Samsidh Mount Litera Zee School, Bengaluru
                      </option>
                      <option value="VH15301">
                        VH15301 - VIBGYOR High School, Hennur
                      </option>
                      <option value="VH15107">
                        VH15107 - VIBGYOR High, Horamavu
                      </option>
                      <option value="MGRYN575">
                        MGRYN575 - RYAN INTERNATIONAL SCHOOL, MANGALORE
                      </option>
                      <option value="BNRYN084">
                        BNRYN084 - RYAN INTERNATIONAL SCHOOL-ICSE, BANNERGATTA,
                        BENGALURU
                      </option>
                      <option value="BNRYN083">
                        BNRYN083 - RYAN INTERNATIONAL SCHOOL-CBSE, BANNERGATTA,
                        BENGALURU
                      </option>
                      <option value="KA771">
                        KA771 - Global City International School, Bengaluru
                      </option>
                      <option value="KA233">
                        KA233 - Indira Priyadarshini School, Bangalore
                      </option>
                      <option value="KA213">
                        KA213 - Nagarjuna Vidyaniketan, Bengaluru
                      </option>
                      <option value="KA944">
                        KA944 - Podar International School, Tumkuru
                      </option>
                      <option value="VH15152">
                        VH15152 - VIBGYOR High, Chokkanahalli
                      </option>
                      <option value="VH15111">
                        VH15111 - VIBGYOR High, Electronic City
                      </option>
                      <option value="VH15116">
                        VH15116 - VIBGYOR High, Kadugodi
                      </option>
                      <option value="VH15130">
                        VH15130 - VIBGYOR High, Yelahanka
                      </option>
                      <option value="KDRYN560">
                        KDRYN560 - RYAN INTERNATIONAL SCHOOL-ICSE, KUNDANAHALLI,
                        BENGALURU
                      </option>
                      <option value="KA042">
                        KA042 - AMC Cambridge Public School, Bengaluru
                      </option>
                      <option value="KA501">
                        KA501 - Vydehi School Of Excellence, Bengaluru
                      </option>
                      <option value="VH15103">
                        VH15103 - VIBGYOR High, Haralur
                      </option>
                      <option value="VH15120">
                        VH15120 - VIBGYOR High, Jakkur
                      </option>
                      <option value="VH15102">
                        VH15102 - VIBGYOR High, Marathahalli
                      </option>
                      <option value="YHRYN064">
                        YHRYN064 - RYAN INTERNATIONAL SCHOOL, YELAHANKA
                      </option>
                      <option value="KA773">
                        KA773 - Brooklyn National Public School, Bengaluru
                      </option>
                      <option value="KA067">
                        KA067 - Delhi Public School, Whitefield, Bengaluru
                      </option>
                      <option value="KA772">
                        KA772 - Indus International School, Bengaluru
                      </option>
                      <option value="KA939">
                        KA939 - The Cambridge International School, Bengaluru
                      </option>
                      <option value="VI15134">
                        VI15134 - VIBGYOR Roots And Rise, Doddanekundi
                      </option>
                      <option value="VH15139">
                        VH15139 - VIBGYOR High, HSR Layout
                      </option>
                      <option value="VI15138">
                        VI15138 - VIBGYOR Roots And Rise, Panathur
                      </option>
                      <option value="VI15134A">
                        VI15134A - VIBGYOR Roots, Doddanekundi
                      </option>
                      <option value="VH15120A">
                        VH15120A - VIBGYOR Kids, Jakkur
                      </option>
                      <option value="VH15107A">
                        VH15107A - VIBGYOR Kids, Horamavu
                      </option>
                      <option value="KDRYN561">
                        KDRYN561 - RYAN Global School-IB&amp;IGCSE, Bengaluru
                      </option>
                      <option value="VH15103A">
                        VH15103A - VIBGYOR Kids, Haralur
                      </option>
                      <option value="VH15111A">
                        VH15111A - VIBGYOR Kids, Electronic City
                      </option>
                      <option value="VH15139A">
                        VH15139A - VIBGYOR Kids, HSR Layout
                      </option>
                      <option value="KA326">
                        KA326 - Wings Montessori House of Children, Mysuru
                      </option>
                      <option value="VH15116A">
                        VH15116A - VIBGYOR Kids, Kadugodi
                      </option>
                      <option value="VH15102A">
                        VH15102A - VIBGYOR Kids, Marathahalli, Bengaluru
                      </option>
                      <option value="VH15301A">
                        VH15301A - VIBGYOR Kids, Hennur
                      </option>
                      <option value="EDACY7-7293">
                        EDACY7-7293 - PSBB Learning Leadership Academy,
                        Bengaluru
                      </option>
                      <option value="MEM10014">
                        MEM10014 - Millennium World School, North Bengaluru
                      </option>
                      <option value="MEM1005">
                        MEM1005 - Millennium World School, Hassan
                      </option>
                      <option value="MEM10011">
                        MEM10011 - Millennium World School, Bengaluru
                      </option>
                      <option value="CORYN578">
                        CORYN578 - RYAN INTERNATIONAL SCHOOL, COCHIN
                      </option>
                      <option value="KL231">
                        KL231 - Ahdiya Pree School, Kerala
                      </option>
                      <option value="JJK631">
                        JJK631 - Jack And Jill Pre-School, Kuwait
                      </option>
                      <option value="IES882">
                        IES882 - Indian Educational School, Kuwait
                      </option>
                      <option value="KSIS588">
                        KSIS588 - Smart Indian School, Kuwait
                      </option>
                      <option value="MP190">
                        MP190 - Daly College, Indore
                      </option>
                      <option value="MP365">
                        MP365 - Himalaya International School, Ratlam
                      </option>
                      <option value="MP835">
                        MP835 - St. Theresa S Girls School, Bhopal
                      </option>
                      <option value="MP715">
                        MP715 - Daffodils Smart School Pipliyamandi, Madhya
                        Pradesh
                      </option>
                      <option value="MP119">
                        MP119 - Golden International School, Indore
                      </option>
                      <option value="MP784">
                        MP784 - Laurels School International, Indore
                      </option>
                      <option value="MP845">
                        MP845 - Sri Sathya Sai Vidya Vihar, Indore
                      </option>
                      <option value="MP118">
                        MP118 - St. Arnold S School, Lalaram Nagar, Indore
                      </option>
                      <option value="MP846">
                        MP846 - St. Joseph S Convent School, Bijalpur, Indore
                      </option>
                      <option value="MP212">
                        MP212 - Sherringwood World School, Indore
                      </option>
                      <option value="JBRNG337">
                        JBRNG337 - ST. XAVIER’S HIGH SCHOOL-ICSE, RATAN NAGAR
                        ROAD, JABALPUR
                      </option>
                      <option value="MP444">
                        MP444 - Billabong High International School, Jabalpur
                      </option>
                      <option value="MP961">
                        MP961 - Choithram International School, Indore
                      </option>
                      <option value="MP992A">
                        MP992A - The Emerald Heights International School,
                        Indore
                      </option>
                      <option value="MP311">
                        MP311 - The Millennium School, Indore
                      </option>
                      <option value="MP121">
                        MP121 - The Vidhyanjali International School, Indore
                      </option>
                      <option value="VI10602">
                        VI10602 - VIBGYOR Roots And Rise, Indore
                      </option>
                      <option value="JBSNG482">
                        JBSNG482 - ST. XAVIER’S HIGH SCHOOL-ICSE, SHANTI NAGAR,
                        JABALPUR
                      </option>
                      <option value="MP088">
                        MP088 - Apple Tree - The World School, Itarsi
                      </option>
                      <option value="MP138">
                        MP138 - Carmel Convent Sr. Sec. School, Ratanpur, Bhopal
                      </option>
                      <option value="MP727">
                        MP727 - Choithram School, Manik Bagh, Indore
                      </option>
                      <option value="SJ897">
                        SJ897 - Podar International School, Jabalpur
                      </option>
                      <option value="BHRYN462">
                        BHRYN462 - RYAN International School, Bhopal
                      </option>
                      <option value="INRYN452">
                        INRYN452 - RYAN INTERNATIONAL SCHOOL, INDORE
                      </option>
                      <option value="JBRYN631">
                        JBRYN631 - RYAN INTERNATIONAL SCHOOL-CBSE, DAMOH NAKA,
                        JABALPUR
                      </option>
                      <option value="RAM22">
                        RAM22 - RAM Individual School
                      </option>
                      <option value="MP992B">
                        MP992B - The Emerald Heights Foundation School, Indore
                      </option>
                      <option value="MP540">
                        MP540 - Sri Sathya Sai Vidya Vihar, Ratlam
                      </option>
                      <option value="EDACY2-1209">
                        EDACY2-1209 - Mind Valley School, Parasia
                      </option>
                      <option value="EDACY7-7221">
                        EDACY7-7221 - Nehru Montessori Sr Secondary School,
                        Burhanpur
                      </option>
                      <option value="EDACY6-6213A">
                        EDACY6-6213A - Happy Kids, Parasia
                      </option>
                      <option value="EDACY7-7268">
                        EDACY7-7268 - The Millennium School, Indore
                      </option>
                      <option value="MH265">
                        MH265 - C. P. Goenka International School, Oshiwara
                      </option>
                      <option value="MH102">
                        MH102 - C. P. Goenka International School, Pune
                      </option>
                      <option value="MH103">
                        MH103 - C. P. Goenka International School, Borivali
                      </option>
                      <option value="MH172">
                        MH172 - Adarsh International School, Goregaon, Mumbai
                      </option>
                      <option value="VH10108">
                        VH10108 - VIBGYOR High, Airoli
                      </option>
                      <option value="VI10216">
                        VI10216 - VIBGYOR Rise, Chinchwad
                      </option>
                      <option value="VH10103">
                        VH10103 - VIBGYOR High School, Goregaon
                      </option>
                      <option value="VH10107">
                        VH10107 - VIBGYOR High, Malad East
                      </option>
                      <option value="VI10117">
                        VI10117 - VIBGYOR Rise, Malad West
                      </option>
                      <option value="VI11106">
                        VI11106 - VIBGYOR Rise, Nashik
                      </option>
                      <option value="VI10225">
                        VI10225 - VIBGYOR Rise, Wagholi
                      </option>
                      <option value="VH10211">
                        VH10211 - VIBGYOR High, Yerwada
                      </option>
                      <option value="APKH210">
                        APKH210 - Apeejay School, Kharghar
                      </option>
                      <option value="KERYN556">
                        KERYN556 - RYAN INTERNATIONAL SCHOOL-CBSE, THAKUR
                        COMPLEX, KANDIVALI EAST
                      </option>
                      <option value="NGHRD010">
                        NGHRD010 - ST. XAVIER'S HIGH SCHOOL, MIDC, HINGNA ROAD,
                        NAGPUR.
                      </option>
                      <option value="MWCBSE427">
                        MWCBSE427 - RYAN INTERNATIONAL SCHOOL-CBSE, LINKING
                        ROAD, MALAD WEST
                      </option>
                      <option value="ANRYN223">
                        ANRYN223 - RYAN SHALOM-ICSE, POONAM NAGAR, ANDHERI
                      </option>
                      <option value="MWICSE426">
                        MWICSE426 - RYAN INTERNATIONAL SCHOOL-ICSE, VASTU PARK,
                        MALAD WEST
                      </option>
                      <option value="NVRYN952">
                        NVRYN952 - RYAN Christian School-ICSE, Vashi, Navi
                        Mumbai
                      </option>
                      <option value="MH101">
                        MH101 - C. P. Goenka International School, Thane
                      </option>
                      <option value="MH889">
                        MH889 - D. G. Khetan International School, Mumbai
                      </option>
                      <option value="MH779B">
                        MH779B - Wisdom High International School, Govardhan
                        Campus, Nasik
                      </option>
                      <option value="MH927">
                        MH927 - Elpro First Steps, Pune
                      </option>
                      <option value="VH10112">
                        VH10112 - VIBGYOR High, Borivali
                      </option>
                      <option value="VI11003">
                        VI11003 - VIBGYOR Roots And Rise, Kalyan
                      </option>
                      <option value="VH10404">
                        VH10404 - VIBGYOR High, Kolhapur
                      </option>
                      <option value="PURYN151">
                        PURYN151 - RYAN International School-ICSE, Bavdhan Road,
                        Pune
                      </option>
                      <option value="NGHWN011">
                        NGHWN011 - St. Xavier’s High School, Hiwri Nagar, Nagpur
                      </option>
                      <option value="NSRYN444">
                        NSRYN444 - RYAN INTERNATIONAL SCHOOL-ICSE, TAGORE NAGAR,
                        NASHIK
                      </option>
                      <option value="NVRYN959">
                        NVRYN959 - RYAN Shalom Montessori-ICSE, Ulwe, Navi
                        Mumbai
                      </option>
                      <option value="MH978">
                        MH978 - Bhavans B P Vidya Mandir, Ashti, Nagpur
                      </option>
                      <option value="MH525">
                        MH525 - Olympiad Center, Bhusawal
                      </option>
                      <option value="MH872">
                        MH872 - Pinnacle High International School, Mumbai
                      </option>
                      <option value="MH775">
                        MH775 - Spring Buds International Pre School, Thane
                      </option>
                      <option value="MH779A">
                        MH779A - Wisdom High International School, Rameshwar
                        Nagar, Nasik
                      </option>
                      <option value="MH111">
                        MH111 - Disney Kids Preschool, Pune
                      </option>
                      <option value="MH800">
                        MH800 - Saplings Pre-School &amp; Activity Center
                      </option>
                      <option value="MH246">
                        MH246 - Kangaroo Kids International Preschool, Pimple
                        Saudagar
                      </option>
                      <option value="VH10215">
                        VH10215 - VIBGYOR High, Hinjewadi
                      </option>
                      <option value="VH10116">
                        VH10116 - VIBGYOR High, Kharghar
                      </option>
                      <option value="VH10207">
                        VH10207 - VIBGYOR High, Magarpatta
                      </option>
                      <option value="APNE706">
                        APNE706 - Apeejay School, Nerul
                      </option>
                      <option value="NVKRG902">
                        NVKRG902 - RYAN International School-ICSE, Kharghar,
                        Navi Mumbai
                      </option>
                      <option value="OJRYN777">
                        OJRYN777 - RYAN INTERNATIONAL SCHOOL-CBSE, OJHAR, NASIK
                      </option>
                      <option value="NVNRL901">
                        NVNRL901 - RYAN INTERNATIONAL SCHOOL-ICSE, NERUL, NAVI
                        MUMBAI
                      </option>
                      <option value="GORYN614">
                        GORYN614 - ST. XAVIER’S HIGH SCHOOL-CBSE, GONDIA
                      </option>
                      <option value="GRRYN333">
                        GRRYN333 - RYAN INTERNATIONAL SCHOOL-ICSE, GOREGAON
                      </option>
                      <option value="PURYN152">
                        PURYN152 - RYAN International Academy-CBSE, Bavdhan
                        Road, Pune
                      </option>
                      <option value="CMRYN121">
                        CMRYN121 - RYAN INTERNATIONAL SCHOOL-ICSE, CHEMBUR
                      </option>
                      <option value="NVRYN956">
                        NVRYN956 - RYAN INTERNATIONAL SCHOOL-CBSE, SANPADA, NAVI
                        MUMBAI
                      </option>
                      <option value="MH266">
                        MH266 - Shri Balaji International School, Mumbai
                      </option>
                      <option value="MH341">
                        MH341 - Disney International Preschool, Pune
                      </option>
                      <option value="VH10206">
                        VH10206 - VIBGYOR High, Balewadi
                      </option>
                      <option value="VI10220">
                        VI10220 - VIBGYOR Rise, Fursungi
                      </option>
                      <option value="VH10202">
                        VH10202 - VIBGYOR High, NIBM
                      </option>
                      <option value="VI10224">
                        VI10224 - VIBGYOR Rise, Pimpale Saudagar
                      </option>
                      <option value="KERYN555">
                        KERYN555 - CAMBRIDGE SCHOOL-ICSE, THAKUR COMPLEX,
                        KANDIVLI EAST
                      </option>
                      <option value="RGCBSE666">
                        RGCBSE666 - St.Joseph High School-CBSE, New Panvel
                      </option>
                      <option value="NVRYN954">
                        NVRYN954 - RYAN SHALOM KAMOTHE-CBSE, KAMOTHE, NAVI
                        MUMBAI
                      </option>
                      <option value="AERYN315">
                        AERYN315 - RYAN INTERNATIONAL SCHOOL, AMBARNATH
                      </option>
                      <option value="NVKRG111">
                        NVKRG111 - RYAN Global School, Kharghar
                      </option>
                      <option value="MH882">
                        MH882 - Munchkids Preschool, Mumbai
                      </option>
                      <option value="EDACY2-1291">
                        EDACY2-1291 - Takshila School, Ahmednagar
                      </option>
                      <option value="EDACY7-7117">
                        EDACY7-7117 - New English School, Landewadi
                      </option>
                      <option value="EDACY7-7368">
                        EDACY7-7368 - Anant Nirmal Global School,Pune
                      </option>
                      <option value="VH10202A">
                        VH10202A - VIBGYOR Kids, NIBM
                      </option>
                      <option value="EDACY6-6242">
                        EDACY6-6242 - SPG International School, Chinchwad
                      </option>
                      <option value="VI11106A">
                        VI11106A - VIBGYOR Roots, Nashik
                      </option>
                      <option value="VH10112A">
                        VH10112A - VIBGYOR Kids, Borivali
                      </option>
                      <option value="MH768">
                        MH768 - Gundecha Education Academy, Kandivali East
                      </option>
                      <option value="VI10220A">
                        VI10220A - VIBGYOR Roots, Fursungi
                      </option>
                      <option value="MH900">
                        MH900 - J Kumar International School, Mumbai
                      </option>
                      <option value="ABC504">
                        ABC504 - ABC Kids Convent, Shirpur Jain
                      </option>
                      <option value="DES001">
                        DES001 - Daimond English School, Aurangabad
                      </option>
                      <option value="DHS075">
                        DHS075 - Dnyanmandir High School, Mumbai
                      </option>
                      <option value="JSP404">
                        JSP404 - J S Public School, Manora
                      </option>
                      <option value="KDE202">
                        KDE202 - Kranti Dnyanpeeth English School, Ashti
                      </option>
                      <option value="LKE103">
                        LKE103 - L K English Medium School, Arni
                      </option>
                      <option value="LME097">
                        LME097 - Little Mary English School, Mumbai
                      </option>
                      <option value="LSP301">
                        LSP301 - Lt Sundarabai Pampattiwar English Medium
                        School, Yavatmal
                      </option>
                      <option value="NSA002">
                        NSA002 - Navkar School, Aurangabad
                      </option>
                      <option value="PBS521">
                        PBS521 - Pandit Babarao Sabnis English School, Nilanga
                      </option>
                      <option value="PJN906">
                        PJN906 - Pandit Jawaharlal Nehru Central Public School,
                        Bhandara
                      </option>
                      <option value="UDE311">
                        UDE311 - Utkarsh Dhyanpith English School, Kawatha
                      </option>
                      <option value="UEM206">
                        UEM206 - Universal English Medium School, Umarkhed
                      </option>
                      <option value="EDACY4-4298">
                        EDACY4-4298 - Stardom International School Pune
                      </option>
                      <option value="EDACY7-7019">
                        EDACY7-7019 - Smart Greenfileds High School, Pune
                      </option>
                      <option value="EDACY7-7090">
                        EDACY7-7090 - Innovative International School, Chakan
                      </option>
                      <option value="AGRYN791">
                        AGRYN791 - RYAN International School-ICSE, Aurangabad
                      </option>
                      <option value="JLRYN691">
                        JLRYN691 - RYAN International School, Jalna
                      </option>
                      <option value="EDACY4-4061">
                        EDACY4-4061 - RKL Galaxy International School, Pune
                      </option>
                      <option value="EDACY3-1268">
                        EDACY3-1268 - Takshila International School Malegaon
                      </option>
                      <option value="VH10206A">
                        VH10206A - VIBGYOR Kids, Balewadi
                      </option>
                      <option value="VI10224A">
                        VI10224A - VIBGYOR Roots, Pimple Saudagar
                      </option>
                      <option value="VH10103A">
                        VH10103A - VIBGYOR Kids, Goregaon
                      </option>
                      <option value="EDACY7-7328">
                        EDACY7-7328 - The World School
                      </option>
                      <option value="VH10107A">
                        VH10107A - VIBGYOR Kids, Malad East
                      </option>
                      <option value="VI10216A">
                        VI10216A - VIBGYOR Roots, Chinchwad
                      </option>
                      <option value="AES708">
                        AES708 - Aarynandi English School, Wadhona Ramnath
                      </option>
                      <option value="BBH209">
                        BBH209 - Blooming Buds High School, Palghar
                      </option>
                      <option value="DDS612">
                        DDS612 - Dew Drops School, Diva
                      </option>
                      <option value="DEM701">
                        DEM701 - Dnyandeep English Medium School, Mangrul
                        Dastgir
                      </option>
                      <option value="DRJ057">
                        DRJ057 - Dixit Road Junior College Of Science, Mumbai
                      </option>
                      <option value="GEP404">
                        GEP404 - Global English Primary School, Manora
                      </option>
                      <option value="LSL401">
                        LSL401 - Late Smt LaxmiDevi Agarwala Convent, Nagpur
                      </option>
                      <option value="SPS601">
                        SPS601 - Shivdarshan Primary Sec. and Hr. Sec. School,
                        Nanduri
                      </option>
                      <option value="SVD008">
                        SVD008 - Smt Vimal Dr Laxminarayan Soni Eng School And
                        Jr College, Nagpur
                      </option>
                      <option value="VCD105">
                        VCD105 - Vandana Convent, Digraj
                      </option>
                      <option value="WPE504">
                        WPE504 - Wartan Primary English School, Mantha
                      </option>
                      <option value="MTSE23">
                        MTSE23 - MESTA Individual Schools
                      </option>
                      <option value="THNSW755">
                        THNSW755 - RYAN INTERANATIONAL SCHOOL-CBSE, NALLASOPARA
                        WEST, THANE
                      </option>
                      <option value="BWRYN752">
                        BWRYN752 - RYAN CHRISTIAN SCHOOL-ICSE, BORIVLI WEST,
                        Mumbai
                      </option>
                      <option value="NGRYN212">
                        NGRYN212 - ST. XAVIER’S KINDERGARTEN SCHOOL-CBSE, AJNI,
                        NAGPUR
                      </option>
                      <option value="MH480">
                        MH480 - Army Pre Primary School, Khadakwasla, Pune
                      </option>
                      <option value="EDACY7-7280">
                        EDACY7-7280 - Sparkles International School, Alandi
                        Dewachi&nbsp;
                      </option>
                      <option value="VH10207A">
                        VH10207A - VIBGYOR Kids, Magarpatta
                      </option>
                      <option value="VH10404A">
                        VH10404A - VIBGYOR Kids, Kolhapur
                      </option>
                      <option value="EDACY7-7190">
                        EDACY7-7190 - Apple Public School,Pimpalgaon
                      </option>
                      <option value="EDACY7-7356">
                        EDACY7-7356 - Periwinkle English Medium School, Mulshi
                      </option>
                      <option value="BWN512">
                        BWN512 - B W New English Medium School, Latur
                      </option>
                      <option value="MCW911">
                        MCW911 - Model Convent, Wadegaon
                      </option>
                      <option value="MPN204">
                        MPN204 - Matoshri Parvatibai Naik Convent, Pusad
                      </option>
                      <option value="NPS904">
                        NPS904 - Navrang Public School, Andhalgaon
                      </option>
                      <option value="SCB105">
                        SCB105 - Shree Convent, Bitoli
                      </option>
                      <option value="SKB904">
                        SKB904 - Smt. Kamalabai B Taori Bahu Uddeshiya Shikshan
                        Sanstha, Nagpur
                      </option>
                      <option value="SPI406">
                        SPI406 - St Paul International School, Datala
                      </option>
                      <option value="SRG066">
                        SRG066 - Shri Ratanshi Gordhandas Bajaria Eng Med Pri
                        School, Borivali
                      </option>
                      <option value="SSN122">
                        SSN122 - Siddhivinayak School, Nagpur
                      </option>
                      <option value="SVD402">
                        SVD402 - Sunrise Vidhyalay, Dhanora
                      </option>
                      <option value="VCM224">
                        VCM224 - Vidyamandir Convent, Mul
                      </option>
                      <option value="EDACY7-7135">
                        EDACY7-7135 - Four-S English Medium School
                      </option>
                      <option value="EDACY4-4211">
                        EDACY4-4211 - Abhinav School Cbsc Nahre, Pune
                      </option>
                      <option value="VH10116A">
                        VH10116A - VIBGYOR Kids, Kharghar
                      </option>
                      <option value="VI10117A">
                        VI10117A - VIBGYOR Roots, Malad West
                      </option>
                      <option value="EDACY7-7323">
                        EDACY7-7323 - Vidya Bhuvan School, Kiwale, Pune&nbsp;
                      </option>
                      <option value="CAC504">
                        CAC504 - Carmel Academy CBSE School, Sironcha
                      </option>
                      <option value="DAC401">
                        DAC401 - Dnyanodaya Academy, Chandrapur
                      </option>
                      <option value="JPS010">
                        JPS010 - Jhonson Preparatory School, Kolhapur
                      </option>
                      <option value="KEM429">
                        KEM429 - KEM High School, Mumbai
                      </option>
                      <option value="KRP412">
                        KRP412 - K R Public School, Nandurbar
                      </option>
                      <option value="LVM072">
                        LVM072 - Lokmanya Vidya Mandir English Sec. Section,
                        Mumbai
                      </option>
                      <option value="PEM203">
                        PEM203 - Pinnacale Engalish Medium School, Yavatmal
                      </option>
                      <option value="RSB066">
                        RSB066 - Ramkrishna School, Borivali East
                      </option>
                      <option value="SLS001">
                        SLS001 - Sonali Little Star School, Aurangabad
                      </option>
                      <option value="EDACY4-4217">
                        EDACY4-4217 - Abhinav English School, Pune
                      </option>
                      <option value="SJ951">
                        SJ951 - Prerna Convent Public School, New Delhi
                      </option>
                      <option value="APPP017">
                        APPP017 - Apeejay School, Panchsheel Park
                      </option>
                      <option value="DL924">
                        DL924 - G.D. Goenka Public School, Sector 22, Delhi
                      </option>
                      <option value="DL041">
                        DL041 - The Mann School, Delhi
                      </option>
                      <option value="SJ567">
                        SJ567 - St. Mark's Senior Secondary Public School, New
                        Delhi
                      </option>
                      <option value="SJ684">
                        SJ684 - Bal Bharati Public School, Dwarka
                      </option>
                      <option value="APPP034">
                        APPP034 - Apeejay School, Pitampura
                      </option>
                      <option value="RNSEC112">
                        RNSEC112 - RYAN INTERNATIONAL SCHOOL, ROHINI, G2, NEW
                        DELHI
                      </option>
                      <option value="DL059">
                        DL059 - Kulachi Hansraj Model School, New Delhi
                      </option>
                      <option value="APSD017">
                        APSD017 - Apeejay School International, South Delhi
                      </option>
                      <option value="RNSEC113">
                        RNSEC113 - RYAN INTERNATIONAL SCHOOL, ROHINI, H3, NEW
                        DELHI
                      </option>
                      <option value="DL362">
                        DL362 - Aadharshila Vidyapeeth, Pitampura, Delhi
                      </option>
                      <option value="DL996">
                        DL996 - Somerville School, Vasundhara Enclave, Delhi
                      </option>
                      <option value="DL314">
                        DL314 - St. Columba's School, New Delhi
                      </option>
                      <option value="SJ453">
                        SJ453 - Hillwoods Academy, New Delhi
                      </option>
                      <option value="APSA017">
                        APSA017 - Apeejay School, Saket
                      </option>
                      <option value="RNSEC025">
                        RNSEC025 - RYAN INTERNATIONAL SCHOOL, ROHINI, SECTOR-25,
                        NEW DELHI
                      </option>
                      <option value="MVDL096">
                        MVDL096 - RYAN International School, Mayur Vihar
                      </option>
                      <option value="VKDL070">
                        VKDL070 - RYAN INTERNATIONAL SCHOOL, VASANT KUNJ, NEW
                        DELHI
                      </option>
                      <option value="RNSLM016">
                        RNSLM016 - RYAN SHALOM MONTESSORI, ROHINI, NEW DELHI
                      </option>
                      <option value="PVDL777">
                        PVDL777 - Ryan International School, Preet Vihar
                      </option>
                      <option value="NG917">
                        NG917 - Indian Language School, Nigeria
                      </option>
                      <option value="OD208">
                        OD208 - Lajpat Rai Dav Public School, Cuttack{" "}
                      </option>
                      <option value="EDACY1-2033">
                        EDACY1-2033 - Bhubaneswar Model Public School,
                        Bhubaneswar
                      </option>
                      <option value="MH878">
                        MH878 - Wisdom World School, Hadapsar
                      </option>
                      <option value="PB117">
                        PB117 - Manav Rachna International School, Mohali
                      </option>
                      <option value="LDRYN456">
                        LDRYN456 - RYAN International School, Ludhiana
                      </option>
                      <option value="AMRYN321">
                        AMRYN321 - RYAN International School, Amritsar
                      </option>
                      <option value="PB116">
                        PB116 - Manav Rachna International School, Ludhiana
                      </option>
                      <option value="PB256">
                        PB256 - Sri Guru Hargobind Public School, Ludhiana
                      </option>
                      <option value="APMM001">
                        APMM001 - Apeejay School, Mahavir Marg
                      </option>
                      <option value="APMT001">
                        APMT001 - Apeejay School, Model Town
                      </option>
                      <option value="APTR001">
                        APTR001 - Apeejay School, Tanda Road
                      </option>
                      <option value="PTRYN147">
                        PTRYN147 - RYAN International School, Patiala
                      </option>
                      <option value="APRM007">
                        APRM007 - Apeejay School, Rama Mandi
                      </option>
                      <option value="NKJLN426">
                        NKJLN426 - RYAN International School, Nakodar, Jalandhar
                      </option>
                      <option value="MEM1008">
                        MEM1008 - The Millennium School, Mohali
                      </option>
                      <option value="MORYN066">
                        MORYN066 - RYAN International School, Mohali
                      </option>
                      <option value="MEM10010">
                        MEM10010 - The Millennium School, Batala
                      </option>
                      <option value="EDACY6-6121">
                        EDACY6-6121 - Dasmesh Public Sen Sec School&nbsp;
                      </option>
                      <option value="MEM10013">
                        MEM10013 - Millennium World School, Ludhiana
                      </option>
                      <option value="EDACY7-7266">
                        EDACY7-7266 - The Millennium School, Amritsar{" "}
                      </option>
                      <option value="PB000">
                        PB000 - Delhi Public School, Rajpura
                      </option>
                      <option value="DGRYN879">
                        DGRYN879 - RYAN International School, Dugri, Ludhiana
                      </option>
                      <option value="PJ329">
                        PJ329 - British Columbia School, Rupnagar
                      </option>
                      <option value="MEM1002">
                        MEM1002 - The Millennium School, Sunam
                      </option>
                      <option value="EDACY7-7274">
                        EDACY7-7274 - The Millennium School, Patiala
                      </option>
                      <option value="MEM10015">
                        MEM10015 - Millennium World School, Samana
                      </option>
                      <option value="JLRYN144">
                        JLRYN144 - RYAN INTERNATIONAL SCHOOL, JALANDHAR
                      </option>
                      <option value="MEM1003">
                        MEM1003 - Millennium World School, Patti
                      </option>
                      <option value="EDACY7-7267">
                        EDACY7-7267 - The Millennium School, HMEL
                      </option>
                      <option value="EDACY7-7180">
                        EDACY7-7180 - Cambridge Overseas School, Mukerian
                      </option>
                      <option value="EDACY7-7275">
                        EDACY7-7275 - The Millennium School, Bathinda
                      </option>
                      <option value="DO777">
                        DO777 - DPS Monarch International School, Doha, Qatar
                      </option>
                      <option value="AJRYN193">
                        AJRYN193 - RYAN International School, Ajmer
                      </option>
                      <option value="RJ105">
                        RJ105 - Delhi Public School, Udaipur
                      </option>
                      <option value="RJ11392">
                        RJ11392 - CLC International School, Sikar
                      </option>
                      <option value="RJ166">
                        RJ166 - Shakuntlam Pre Global School, Jaipur
                      </option>
                      <option value="RJ109">
                        RJ109 - Neo Learning School, Padampur
                      </option>
                      <option value="RJ282">
                        RJ282 - Jayshree Periwal Global School, Jagatpura,
                        Jaipur
                      </option>
                      <option value="RJ666">RJ666 - Kidzee, Pali</option>
                      <option value="JPPDM745">
                        JPPDM745 - RYAN INTERNATIONAL SCHOOL, PADMAWATI, JAIPUR
                      </option>
                      <option value="UDRYN313">
                        UDRYN313 - RYAN INTERNATIONAL SCHOOL, UDAIPUR
                      </option>
                      <option value="JPVTR302">
                        JPVTR302 - RYAN INTERNATIONAL SCHOOL, V.T. ROAD, JAIPUR
                      </option>
                      <option value="RJ707">
                        RJ707 - IPA Institute, Ajmer
                      </option>
                      <option value="JPJGT563">
                        JPJGT563 - RYAN INTERNATIONAL SCHOOL, JAGATPURA, JAIPUR
                      </option>
                      <option value="R">R - I</option>
                      <option value="EDACY7-7030">
                        EDACY7-7030 - Fame Gurukul MV Sr Sec School, Jaipur
                      </option>
                      <option value="EDACY5-5005">
                        EDACY5-5005 - Frame International School, Dausa
                      </option>
                      <option value="BKRYN334">
                        BKRYN334 - RYAN International School, Bikaner
                      </option>
                      <option value="EDACY6-6099">
                        EDACY6-6099 - SS Mody Vidya Vihar
                      </option>
                      <option value="UAE097">
                        UAE097 - New Delhi Private School, Sharjah
                      </option>
                      <option value="UAE082">
                        UAE082 - Delhi Private School, Sharjah
                      </option>
                      <option value="TN938">
                        TN938 - Redeemer Talent Academy, Tamil Nadu
                      </option>
                      <option value="VH15701">
                        VH15701 - VIBGYOR High, Coimbatore
                      </option>
                      <option value="CNRYN210">
                        CNRYN210 - RYAN INTERNATIONAL SCHOOL, CHENNAI
                      </option>
                      <option value="EDACY7-7295">
                        EDACY7-7295 - The PSBB Millennium School, Gerugambakkam
                      </option>
                      <option value="EDACY7-7296">
                        EDACY7-7296 - The PSBB Millennium School, Coimbatore
                      </option>
                      <option value="VH15701A">
                        VH15701A - VIBGYOR Kids, Coimbatore
                      </option>
                      <option value="EDACY7-7294">
                        EDACY7-7294 - The PSBB Millennium School, Cuddalore
                      </option>
                      <option value="EDACY4-4024">
                        EDACY4-4024 - Good Hope Matric Hr Sec School, Arumbakkam
                      </option>
                      <option value="EDACY7-7292">
                        EDACY7-7292 - The PSBB Millennium School-OMR, Chennai
                      </option>
                      <option value="EDACY5-5020">
                        EDACY5-5020 - Al Huda Matriculation Higher Secondary
                        School,Vaniyambadi
                      </option>
                      <option value="TN474">
                        TN474 - Army Public School, Chennai
                      </option>
                      <option value="TS057">
                        TS057 - Meridian Public School, Banjara Hills
                      </option>
                      <option value="TS199">
                        TS199 - Indus International School, Hyderabad
                      </option>
                      <option value="TS925">
                        TS925 - Glendale Academy International School, Telangana
                      </option>
                      <option value="TS119">
                        TS119 - The Shri Ram Universal School, Hyderabad
                      </option>
                      <option value="TS202">
                        TS202 - Glendale International School IB-PYP, Telangana
                      </option>
                      <option value="TG214">
                        TG214 - Joyland School, Hyderabad
                      </option>
                      <option value="TS200">
                        TS200 - Glendale International School Cambridge,
                        Telangana
                      </option>
                      <option value="EDACY6-6213B">
                        EDACY6-6213B - Little Buds Up School, Guntur
                      </option>
                      <option value="EDACY7-7141">
                        EDACY7-7141 - Ameri Kids 'N' Scholars School,Lokeshwaram
                      </option>
                      <option value="EDACY6-6185">
                        EDACY6-6185 - Indian Public School
                      </option>
                      <option value="UP602">
                        UP602 - Ramagya School, Greater Noida
                      </option>
                      <option value="UP484">
                        UP484 - St. Xaviers High School, Ghaziabad
                      </option>
                      <option value="VH10503">
                        VH10503 - VIBGYOR High, Lucknow
                      </option>
                      <option value="APGR308">
                        APGR308 - Apeejay International School, Greater Noida
                      </option>
                      <option value="GZRYN753">
                        GZRYN753 - RYAN International School, Ghaziabad
                      </option>
                      <option value="UP102">
                        UP102 - Delhi Public School, Gautam Buddh Nagar
                      </option>
                      <option value="UP182">
                        UP182 - K. R. Manglam World School, Ghaziabad{" "}
                      </option>
                      <option value="UP861">
                        UP861 - Raghav Global School, Noida
                      </option>
                      <option value="UP209">
                        UP209 - Ramagya School, Noida
                      </option>
                      <option value="NORYN301">
                        NORYN301 - RYAN INTERNATIONAL SCHOOL, NOIDA
                      </option>
                      <option value="APNO301">
                        APNO301 - Apeejay School, Noida
                      </option>
                      <option value="NOEX487">
                        NOEX487 - RYAN INTERNATIONAL SCHOOL, NOIDA EXTENSION
                      </option>
                      <option value="SJRYN242">
                        SJRYN242 - RYAN International School, Shahjahanpur
                      </option>
                      <option value="UP862">
                        UP862 - Aspam Scottish School, Noida
                      </option>
                      <option value="UP153">
                        UP153 - Ramagya School, Dadri
                      </option>
                      <option value="UP670">
                        UP670 - G.D. Goenka Toddler House, Bareilly
                      </option>
                      <option value="GRNO258">
                        GRNO258 - RYAN INTERNATIONAL SCHOOL, GREATER NOIDA
                      </option>
                      <option value="EDACY7-7272">
                        EDACY7-7272 - The Millennium School, Sector-119, Noida
                      </option>
                      <option value="MEM1007">
                        MEM1007 - Millennium World School, Orai
                      </option>
                      <option value="MEM1004">
                        MEM1004 - Millennium World School, Kushinagar
                      </option>
                      <option value="EDACY7-7270">
                        EDACY7-7270 - The Millennium School, Lucknow
                      </option>
                      <option value="VH10503A">
                        VH10503A - VIBGYOR Kids, Lucknow
                      </option>
                      <option value="EDACY3-1238">
                        EDACY3-1238 - Kachhawa Christian School, Mirzapur
                      </option>
                      <option value="EDACY7-7271">
                        EDACY7-7271 - The Millennium School, Sector-41, Noida
                      </option>
                      <option value="MEM10012">
                        MEM10012 - Millennium World School, Moradabad
                      </option>
                      <option value="MEM1006">
                        MEM1006 - Millennium World School, Shahjahanpur
                      </option>
                      <option value="MEM10016">
                        MEM10016 - Millennium World School, Sultanpur
                      </option>
                      <option value="UK954">
                        UK954 - DSB International Public School, Rishikesh
                      </option>
                      <option value="UK958">
                        UK958 - Countrywide Public School, Bageshwar
                      </option>
                      <option value="UK123">
                        UK123 - Delhi Public School, Dehradun
                      </option>
                      <option value="WB594">
                        WB594 - Delhi Public School, Durgapur
                      </option>
                      <option value="WB116">
                        WB116 - KidsTree Tamluk, West Bengal
                      </option>
                      <option value="WB300">
                        WB300 - Delhi Public School, Ruby Park, Kolkata
                      </option>
                      <option value="WB428">
                        WB428 - St. Anthony'S School, Jalpaiguri
                      </option>
                      <option value="WBRYN731">
                        WBRYN731 - RYAN International School, Bolpur
                      </option>
                      <option value="WB298">
                        WB298 - Delhi World Public School, Barasat
                      </option>
                      <option value="WB289">
                        WB289 - Delhi World Public School, Islampur
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaSchool />
                    </span>
                    <input
                      placeholder="School Name"
                      name="schoolName"
                      type="text"
                      className="form-control"
                      defaultValue=""
                      disabled=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <PiChalkboardTeacherDuotone />
                    </span>
                    <select
                      name="studentClass"
                      className="form-select"
                      id="country-state"
                    >
                      <option value="">Class</option>
                      <option value="PRE-NURSERY">PRE-NURSERY</option>
                      <option value="NURSERY">NURSERY</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="CLASS 1">CLASS 1</option>
                      <option value="CLASS 2">CLASS 2</option>
                      <option value="CLASS 3">CLASS 3</option>
                      <option value="CLASS 4">CLASS 4</option>
                      <option value="CLASS 5">CLASS 5</option>
                      <option value="CLASS 6">CLASS 6</option>
                      <option value="CLASS 7">CLASS 7</option>
                      <option value="CLASS 8">CLASS 8</option>
                      <option value="CLASS 9">CLASS 9</option>
                      <option value="CLASS 10">CLASS 10</option>
                      <option value="CLASS 11">CLASS 11</option>
                      <option value="CLASS 12">CLASS 12</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      placeholder="Student Name"
                      name="studentName"
                      type="text"
                      className="form-control"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <IoMaleFemale />
                    </span>
                    <select
                      name="gender"
                      className="form-select"
                      id="country-state"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FaCalendarAlt />
                    </span>
                    <input
                      placeholder="Date of birth"
                      name="date_of_birth"
                      max="2024-02-22"
                      type="date"
                      className="form-control"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <p className="error-msg"></p>
              <div className="d-flex mt-3 gap-2">
                <button className="common-all-btn">Add Student</button>
                <Link to="/user-dashboard" className="common-all-btn">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
