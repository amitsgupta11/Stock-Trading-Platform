import React from 'react';
function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5' >
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p1 className='text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equality investment.</p1>
                    <h2 className='fs-4'>No Spam or gimmicks</h2>
                    <p1 className='text-muted'>No gimmicks,spam,"gamification",or annoying push notification High quality app that you use at your pace the way you like.</p1>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p1 className='text-muted'>Not just app,but a while ecosystem Our investment in 30+ fintech startups offer tou tailored services specific to your needs.</p1>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p1 className='text-muted'>with initiative like nudge and kill Switch, we dont't just facilitate transction but actively help you do better with your money. </p1>
                </div>
                <div className='col-6 p-5'>
                    <img src='ecosystem.png' style={{width:"90%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:'none'}}>Expolre our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration:'none'}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;