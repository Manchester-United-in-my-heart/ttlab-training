import {FaEye, FaRegEyeSlash} from 'react-icons/fa';
import {useEffect, useState} from 'react';

export default function Login() {
  const host = import.meta.env.VITE_HOST || 'https://nest-mongo-gold.vercel.app' ;
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    fetch(`${host}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }).then((res) => {
        console.log(res.status)
        if (res.status !== 401) {
          window.location.href = '/';
        }
      }
    )
  });
  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   if (accessToken) {
  //     window.location.href = '/';
  //   }
  // }, []);
  
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = async () => {
    try {
      console.log(username, password);
      const res = await fetch(`${host}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // CORS
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
        },
        body: JSON.stringify({username, password}),
      });
      const data = await res.json();
      if (data.access_token) {
        const accessToken = data.access_token;
        localStorage.setItem('accessToken', accessToken);
        window.location.href = '/';
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log('error')
    }
  }
  return (
    <div className="w-full mt-[119px] mx-[507px]">
      <div className="flex flex-col justify-center items-center font-['Public Sans]">
        <svg width="108" height="60" viewBox="0 0 108 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6_18331)">
            <path
              d="M45.0034 12.5996C45.0034 19.6966 30.475 36 27.9913 36C27.4338 36 27.0034 35.5555 27.0034 35.0123C27.0034 31.4215 37.7992 20.4162 37.7992 13.3757C37.7992 5.33333 28.7957 3.2381 28.7957 1.08642C28.7957 0.627868 29.2614 0.0070566 29.967 0.0070566C32.0979 1.92365e-06 45.0034 5.29806 45.0034 12.5996Z"
              fill="#E31931"/>
            <path
              d="M59.4046 12.5996C59.4046 19.6966 44.8762 36 42.3925 36C41.8351 36 41.4047 35.5555 41.4047 35.0123C41.4047 31.4215 52.2004 20.4162 52.2004 13.3757C52.2004 5.33333 43.1969 3.2381 43.1969 1.08642C43.1969 0.627868 43.6626 0.0070566 44.3682 0.0070566C46.4991 1.92365e-06 59.4046 5.29806 59.4046 12.5996Z"
              fill="black"/>
            <path
              d="M63.0035 23.4004C63.0035 16.2963 77.5319 0 80.0157 0C80.5731 0 81.0035 0.444445 81.0035 0.987655C81.0035 4.57848 70.2077 15.5838 70.2077 22.6243C70.2077 30.6667 79.2113 32.7619 79.2113 34.9136C79.2113 35.3721 78.7456 35.993 78.04 35.993C75.909 35.993 63.0035 30.7019 63.0035 23.4004Z"
              fill="black"/>
            <path d="M7.60643 49.3969H4.6076V59.8237H2.98471V49.3969H0V48.1623H7.60643V49.3969Z" fill="black"/>
            <path
              d="M16.7864 55.6049C16.7864 56.9877 16.4266 58.067 15.7139 58.836C15.0013 59.6049 14.0416 59.9929 12.8351 59.9929C11.6496 59.9929 10.7041 59.6049 10.0056 58.836C9.30703 58.067 8.95422 56.9877 8.95422 55.6049V52.4021C8.95422 51.0265 9.30703 49.9471 10.0056 49.164C10.7112 48.388 11.6496 47.993 12.828 47.993C14.0275 47.993 14.9801 48.381 15.6998 49.164C16.4195 49.9471 16.7794 51.0194 16.7794 52.4021V55.6049H16.7864ZM15.1706 52.3739C15.1706 51.358 14.966 50.5891 14.5638 50.06C14.1545 49.5379 13.583 49.2698 12.8421 49.2698C12.1083 49.2698 11.5509 49.5309 11.1557 50.06C10.7676 50.5891 10.5701 51.358 10.5701 52.3739V55.6049C10.5701 56.6279 10.7676 57.4039 11.1557 57.933C11.5509 58.4621 12.1083 58.7231 12.8351 58.7231C13.583 58.7231 14.1616 58.4621 14.5638 57.933C14.966 57.4109 15.1706 56.6279 15.1706 55.5979V52.3739Z"
              fill="black"
            />
            <path
              d="M20.7378 54.5962H19.6229V59.8237H17.993V48.1623H19.6229V53.2911H20.5896L23.6731 48.1623H25.6135L21.9444 53.7002L25.8958 59.8308H23.906L20.7378 54.5962Z"
              fill="black"/>
            <path
              d="M30.9973 53.8272H31.0467L33.4316 48.1623H35.238L31.8087 55.6262V59.8237H30.1929V55.5203L26.806 48.1623H28.6264L30.9973 53.8272Z"
              fill="black"/>
            <path
              d="M44.0015 55.6049C44.0015 56.9877 43.6416 58.067 42.9289 58.836C42.2163 59.6049 41.2567 59.9929 40.0501 59.9929C38.8647 59.9929 37.9192 59.6049 37.2206 58.836C36.5221 58.067 36.1693 56.9877 36.1693 55.6049V52.4021C36.1693 51.0265 36.5221 49.9471 37.2206 49.164C37.9262 48.388 38.8647 47.993 40.043 47.993C41.2426 47.993 42.1951 48.381 42.9148 49.164C43.6346 49.9471 43.9944 51.0194 43.9944 52.4021V55.6049H44.0015ZM42.3856 52.3739C42.3856 51.358 42.181 50.5891 41.7788 50.06C41.3696 49.5379 40.798 49.2698 40.0571 49.2698C39.3233 49.2698 38.7659 49.5309 38.3707 50.06C37.9827 50.5891 37.7851 51.358 37.7851 52.3739V55.6049C37.7851 56.6279 37.9827 57.4039 38.3707 57.933C38.7659 58.4621 39.3233 58.7231 40.0501 58.7231C40.798 58.7231 41.3766 58.4621 41.7788 57.933C42.181 57.4109 42.3856 56.6279 42.3856 55.5979V52.3739Z"
              fill="black"
            />
            <path d="M53.5203 49.9824H50.8884V59.8237H48.6164V49.9824H46.0056V48.1623H53.5203V49.9824Z" fill="#E31931"/>
            <path
              d="M61.5924 54.7091H57.6762V58.0107H62.2839V59.8308H55.3901V48.1623H62.2627V49.9824H57.6692V52.889H61.5853V54.7091H61.5924Z"
              fill="#E31931"/>
            <path
              d="M71.6966 56.0706L71.7177 56.1199C71.7248 57.4039 71.4214 58.3704 70.8075 59.0194C70.1866 59.6684 69.2764 60 68.0698 60C66.8632 60 65.8965 59.6332 65.1768 58.8924C64.4571 58.1517 64.0972 57.1076 64.0972 55.746V52.261C64.0972 50.9136 64.443 49.8625 65.1415 49.1147C65.8401 48.3669 66.7715 48 67.9428 48C69.1846 48 70.116 48.3316 70.7511 48.9947C71.3861 49.6579 71.7107 50.6385 71.7319 51.9365L71.7107 51.9859H69.5163C69.5515 51.217 69.4457 50.6667 69.2058 50.3281C68.9659 49.9894 68.5425 49.8201 67.9498 49.8201C67.4347 49.8201 67.0467 50.0177 66.7715 50.4198C66.4963 50.8219 66.3622 51.4286 66.3622 52.2399V55.746C66.3622 56.5714 66.5104 57.1781 66.7997 57.5803C67.089 57.9824 67.5194 58.1799 68.0768 58.1799C68.6272 58.1799 69.0082 58.0247 69.227 57.7002C69.4457 57.3827 69.5374 56.8395 69.5092 56.0706H71.6966Z"
              fill="#E31931"
            />
            <path
              d="M81.0741 59.8237H78.795V54.9912H75.1752V59.8237H72.889V48.1623H75.1752V53.1782H78.795V48.1623H81.0741V59.8237Z"
              fill="#E31931"/>
            <path d="M85.0679 58.0036H89.3298V59.8237H82.7817V48.1623H85.0679V58.0036Z" fill="#E31931"/>
            <path
              d="M96.668 57.3334H93.5916L92.9636 59.8237H90.6633L93.9514 48.1623H96.3223L99.6033 59.8237H97.3031L96.668 57.3334ZM94.0573 55.5133H96.2023L95.151 51.3863H95.1016L94.0573 55.5133Z"
              fill="#E31931"/>
            <path
              d="M100.408 59.8237V48.1623H103.844C105.044 48.1623 105.982 48.4304 106.659 48.9666C107.337 49.5027 107.675 50.2928 107.675 51.351C107.675 51.9084 107.555 52.4022 107.309 52.8255C107.062 53.2558 106.695 53.5803 106.201 53.792C106.815 53.933 107.266 54.2505 107.563 54.7302C107.859 55.2099 108 55.7743 108 56.4234C108 57.538 107.683 58.3845 107.04 58.963C106.398 59.5415 105.488 59.8308 104.296 59.8308H100.408V59.8237ZM102.694 53.0865H103.95C104.416 53.0794 104.768 52.9383 105.022 52.6844C105.269 52.4233 105.396 52.0494 105.396 51.5627C105.396 51.0195 105.269 50.6174 105.008 50.3634C104.754 50.1094 104.366 49.9824 103.844 49.9824H102.687V53.0865H102.694ZM102.694 54.6808V58.0036H104.303C104.782 58.0036 105.142 57.8696 105.382 57.6015C105.622 57.3334 105.742 56.9383 105.742 56.4092C105.742 55.8519 105.643 55.4286 105.439 55.1253C105.234 54.829 104.909 54.6738 104.458 54.6738H102.694V54.6808Z"
              fill="#E31931"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_18331">
              <rect width="108" height="60" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div>
          <h1 className="text-[36px]">Đăng nhập</h1>
        </div>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center mt-[50px]">
          <div className="flex flex-col justify-center items-start">
            <label className="text-[18px]">Email</label>
            <input placeholder="Nhập email"
                   className="border-[1px] border-[#E31931] rounded-[5px] w-[500px] h-[50px] mt-[10px] pl-[10px]"
                   onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-start relative my-[25px]">
            <label className="text-[18px]">Mật khẩu</label>
            <input id="password"
                   className="border-[1px] border-[#E31931] rounded-[5px] w-[500px] h-[50px] mt-[10px] pl-[10px]"
                   type="password" onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              {showPassword ? (<FaRegEyeSlash className="absolute right-[10px] top-[50px] text-xl" onClick={() => {
                setShowPassword(!showPassword);
                document.getElementById('password')?.setAttribute('type', 'text');
              }}/>) : (<FaEye className="absolute right-[10px] top-[50px] text-xl" onClick={() => {
                  setShowPassword(!showPassword);
                  document.getElementById('password')?.setAttribute('type', 'password');
                }}/>
              )}
            </span>
          </div>
          <div className="flex justify-between w-[500px]">
            <div className="flex gap-[5px]">
              <input id="remember" type="checkbox"/>
              <label htmlFor="remember">Ghi nhớ Đăng nhập </label>
            </div>
            <div>
              <a className=" font-semibold text-[#0F60FF]" href="#">
                {' '}
                Quên mật khẩu{' '}
              </a>
            </div>
          </div>
          <button onClick={async () => {
            await loginHandler()
          }} type="button" className="w-[500px] h-[50px] bg-[#0F60FF] mt-[10px] rounded-[5px] text-[18px] text-white">
            Đăng nhập
          </button>
        </form>
        <div className="flex justify-center mt-[32px] gap-2">
          Bạn chưa có tài khoản?
          <span>
            <a className=" font-semibold text-[#0F60FF]" href="#">
              Đăng ký
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
