const Create = () => {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-center m-[25px]">INVOICE</h1>
            </div>
            <div className="flex flex-col justify-center text-center gap-[25px] border border-gray-500/30 rounded-xl max-w-xl mx-auto px-6 py-8 mx-auto bg-white">
                <h1 className="text-2xl font-semibold ">Your Organization Details</h1>
                <div className="flex flex-row gap-[25px]">
                  <div className="w-[300px]">
                <label className="block mb-1 font-medium text-left"> COMPANY NAME
        </label>
    <input
      type="text"
      placeholder="Enter Company Name..."
      className="w-full text-center border border-gray-500/30 rounded-lg py-2 bg-[oklch(99.4%_0.038_75.164)]"
    />
                </div>
                      <div className="w-[300px]">
                <label className="block mb-1 font-medium text-left">TAGLINE
        </label>
    <input
      type="text"
      placeholder="Enter Tagline..."
      className="w-full text-center border border-gray-500/30 rounded-lg py-2 bg-[oklch(99.4%_0.038_75.164)]"
    />
                    </div>
                </div>
                <div className="w-[530px]">
                 <label className="block mb-1 font-medium text-left">ADDRESS
        </label>
                    <textarea placeholder="Enter Company Address.." className="w-full text-center border border-gray-500/30 rounded-lg bg-[oklch(99.4%_0.038_75.164)]" cols={5} rows={4} />
                    </div>
                <div className="flex flex-row gap-[25px]">
                    <div className="w-[300px]">
                 <label className="block mb-1 font-medium text-left">PHONE
        </label>
                        <input type="tel" placeholder="Enter Phone Number.." className="w-full text-center border border-gray-500/30 rounded-lg py-2 bg-[oklch(99.4%_0.038_75.164)]" />
                    </div>
                    <div className="w-[300px]">
                 <label className="block mb-1 font-medium text-left">E-MAIL
        </label>
                        <input type="text" placeholder="Enter Email Address.." className="w-full text-center border border-gray-500/30 rounded-lg py-2 bg-[oklch(99.4%_0.038_75.164)]" />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Create