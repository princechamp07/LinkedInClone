function RightSide() {
  return (
    <div className="mb-14">
      {
        //--FollowCard---
      }
      <div className="text-center overflow-hidden p-3 mb-2 bg-white rounded relative border-none shadow">
        <div className="inline-flex items-center justify-between text-sm w-full text-slate-600 font-semibold ">
          <h2>Add to your feed</h2>
          <img src="./images/feed-icon.svg" alt="" />
        </div>
        {
          //----------Feed List------------
        }

        <ul className="mt-4 ">
          <li className="flex items-center my-3 relative text-sm">
            <a>
              <div className="bg-[url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs')] bg-[contain] w-12 h-12 bg-[center] bg-no-repeat mr-2" />
            </a>
            <div className="flex flex-col">
              <span>#Linkedin</span>
              <button className="bg-transparent text-slate-800 shadow-inner shadow-slate-500 rounded-lg box-border font-semibold p-2 items-center inline-flex justify-center max-h-8 max-w-[480px] text-center">
                Follow
              </button>
            </div>
          </li>

          <li className="flex items-center my-3 relative text-sm">
            <a>
              <div className="bg-[url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs')] bg-[contain] w-12 h-12 bg-[center] bg-no-repeat mr-2" />
            </a>
            <div className="flex flex-col">
              <span>#video</span>
              <button className="bg-transparent text-slate-800 shadow-inner shadow-slate-500 rounded-lg box-border font-semibold p-2 items-center inline-flex justify-center max-h-8 max-w-[480px] text-center">
                Follow
              </button>
            </div>
          </li>
        </ul>

        {
            //---Recommended---
        }
            <div className="text-blue-500 flex items-center text-sm">
                View all recommendations
            <img src="./images/right-icon.svg" alt="" />
            </div>
      </div>
      <div className="text-center overflow-hidden p-3 mb-2 bg-white rounded relative border-none shadow">
      <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default RightSide;
