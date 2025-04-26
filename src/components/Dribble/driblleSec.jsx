import React from 'react'

function Dribble() {
  return (
    <section className="!pr-24 !pl-24 !pb-48 !mt-50 overflow-hidden">
            <div className="achvedCont grid grid-cols-2 !gap-6">
              <div className="acheved bg-[#1f202266] rounded-2xl z-0 !p-14 hover:bg-amber-700 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>1</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                  successful <br />
                  campaigns
                  </div>
                </div>
              </div>
              <div className="acheved1 bg-[#1f202266] rounded-2xl z-0 !p-14 !mt-40 !-mb-40 hover:bg-green-500 text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>1</span>
                    <span>0</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    satisfied<br />
                    clients
                  </div>
                </div>
              </div>
              <div className="acheved2 bg-[#1f202266] rounded-2xl z-0 !p-14 hover:bg-yellow-200 text-white hover:text-black transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>2</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
              <div className="acheved3 bg-[#1f202266] rounded-2xl z-0 !p-14 !mt-40 !-mb-40 hover:bg-yellow-500 hover:text-black text-white transition-all duration-300 ease-linear cursor-pointer">
                <div className="acchheWrap">
                  <div className="nums !mb-16 text-8xl">
                    <span>2</span>
                    <span>0</span>
                    <sup>+</sup>
                  </div>
                  <div className="flex items-center justify-end text-5xl">
                    creative<br />
                    designs
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Dribble