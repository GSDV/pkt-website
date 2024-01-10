import '@Styles/components/scholarships.css'


export default function Index() {
    return (
        <div className='fullWrapper'>
            <div className='pWrapper'>
                <div className='pTitle'>Scholarships</div>
                <div className='pText'>Phi Kappa Theta - both the national chapter and the Illinois Beta Delta chapter - boasts multiple scholarships that members can obtain. These scholarships offer financial support for the recipient.</div>


                <div className='pSpacer'></div>


                <div className='pTitle'>National Support</div>

                    <div className='sTitle'>Grants</div>
                    <div className='pText'>The national Phi Kappa Theta chapter awards grants to help with education, housing, and equipment.</div>


                <div className='pSpacer'></div>


                <div className='pTitle'>Beta Delta Chapter Scholarships</div>

                    <div className='sTitle'>Greg Wooters Award</div>
                    <div className='pText'>Awarded to the applicant who has the highest GPA accumulated in the last academic year.</div>
                    
                    <div className='sSpacer'></div>
                    
                    <div className='sTitle'>Most Improved GPA Award</div>
                    <div className='pText'>Awarded to the applicant with the most substantial improvement in GPA compared to the previous semester.</div>


                <div className='pSpacer'></div>


                <div className='pText'>In addition to the fraternity's scholarships, the Beta Delta chapter helps brothers with applying for University of Illinois scholarships.</div>


                <div className='pSpacer'></div>
            </div>
        </div>
    )
}