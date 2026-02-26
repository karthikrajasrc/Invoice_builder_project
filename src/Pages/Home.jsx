import { Link } from "react-router"

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="text-[25px] md:text-4xl lg:text-4xl font-bold flex justify-center align-center pt-[50px]">Welcome To<span className="pl-[8px] text-[oklch(50.5%_0.213_27.518)]"> Invoice Builder</span></h1> 
                    <div className="flex justify-center align-center ">
<h2 className="text-xl md:text-2xl font-bold pt-[20px] text-center">Simple & Professional Invoice Management</h2>
                    </div>
                    
                </div>
                <div className="flex gap-[5px] w-fit mx-auto px-[20px] rounded-2xl justify-center items-center h-[70px] md:h-[80px] shadow-xl border border-gray-500/30 mt-[50px] bg-white ">
                    <Link to={"create"}>
                    <button className="border border-gray-500/30 px-4 py-1 rounded-md text-[16px] md:text-[20px] text-white font-bold bg-[oklch(44.8%_0.119_151.328)] hover:scale-110 transition-all duration-150 ease-in-out">Click</button></Link><p className="text-[18px] md:text-[22px] font-semibold text-center">here to Create New Invoice!!</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center mx-[10px] mt-[60px] xl:mx-[60px] xl:gap-[30px] gap-[5px]">
                    <div className="md:flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5">
                        <h1 className="font-bold text-xl md:text-[27px] text-center" id="about">About</h1>
                        <div>
                        <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">What is Invoice Builder?</h2>
                            <p className="text-[14px] md:text-[20px]">Invoice Builder is a web-based application that helps users create, manage, and export professional invoices quickly and easily.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Who is it for?</h2>
                            <p className="text-[14px] md:text-[20px]">Designed for freelancers, small businesses, startups, and developers who need a fast and reliable invoicing solution.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Why use this app?</h2>
                            <p className="text-[14px] md:text-[20px]">It simplifies invoice generation, automates calculations, and ensures a professional output without complex tools.</p>
                        </div>
                        </div>

                    <div className="md:flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5" >
                        <h1 className="font-bold text-xl md:text-[27px] text-center" id="features">Features</h1>
                        <div>
                        <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Invoice Creation</h2>
                            <p className="text-[14px] md:text-[20px]">Easily enter client details, invoice numbers, dates, and multiple billing items in a structured format.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Real-time Calculation</h2>
                            <p className="text-[14px] md:text-[20px]">Automatically calculates subtotal, tax, and grand total as you add or update items.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">PDF Export & Print Support</h2>
                            <p className="text-[14px] md:text-[20px]">Download invoices as clean, printable PDF files and Generate printer-friendly invoices with proper formatting and layout.</p>
                        </div>
                        </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center mx-[10px] mt-[60px] xl:mx-[60px] xl:gap-[30px] gap-[5px]">
                    <div className="md:flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5">
                        <h1 className="font-bold text-xl md:text-[27px] text-center" id="how">How It Works Section??</h1>
                        <div>
                        <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Step 1: Enter Client Details</h2>
                            <p className="text-[14px] md:text-[20px]">Fill in customer information including name, address, invoice number, and date.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Step 2: Add Line Items</h2>
                            <p className="text-[14px] md:text-[20px]">Add product or service details with quantity and rate and Check calculations and edit or delete items if needed.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Step 3: Export / Print PDF</h2>
                            <p className="text-[14px] md:text-[20px]">Download or print your completed invoice instantly with your Company name, Address and Phone Number.</p>
                        </div>
                        </div>

                    <div className="md:flex-1 border border-gray-500/30 rounded-xl p-[15px] bg-white shadow-inner shadow-black/5" >
                        <h1 className="font-bold text-xl md:text-[27px] text-center" id="benefits">Benefits</h1>
                        <div>
                        <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Saves Time</h2>
                            <p className="text-[14px] md:text-[20px]">Generate professional invoices in minutes without manual calculations.</p>
                        </div>
                        
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Easy to Use</h2>
                            <p className="text-[14px] md:text-[20px]">Simple interface designed for smooth user experience. Clean and structured invoice format suitable for business use.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-[18px] md:text-[22px] pt-[25px]">Accurate Calculations</h2>
                            <p className="text-[14px] md:text-[20px]">Automatic total and tax computation reduces human errors.</p>
                        </div>
                        </div>
                </div>
            </div>
            <div>
               <footer className="bg-[oklch(83.7%_0.128_66.29)] text-black-900 mt-[80px]">
  <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
    <div>
      <h2 className="text-xl md:text-[20px] font-bold text-black">Invoice Builder</h2>
      <p className="mt-3 text-sm md:text-[16px] text-black">
        A simple and professional invoice generation tool for freelancers, 
        startups, and small businesses.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-bold md:text-[20px] text-black">Quick Links</h3>
      <ul className="mt-3 space-y-2 text-sm md:text-[16px]">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#benefits">Benefits</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold md:text-[20px] text-black">Contact</h3>
      <p className="mt-3 text-sm md:text-[16px] text-black">
        Email: support@invoicebuilder.com
      </p>
      <p className="text-sm md:text-[16px] text-black">
        Built for productivity & efficiency.
      </p>
    </div>

  </div>
  <div className="border-t border-gray-700 md:text-[15px] text-center py-4 text-sm text-black">
    © 2026 Invoice Builder. All rights reserved.
  </div>
</footer>
            </div>
    </>
            )
}

export default Home