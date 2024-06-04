import React from "react";

const Test = () => {
  return (
    <div>
      <>
        {/* Testimonials */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <svg
                  className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300"
                  width={140}
                  height={47}
                  viewBox="0 0 140 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                    fill="currentColor"
                  />
                  <path
                    d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                    fill="currentColor"
                  />
                  <path
                    d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                    fill="currentColor"
                  />
                  <path
                    d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                    fill="currentColor"
                  />
                  <path
                    d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                    fill="currentColor"
                  />
                  <path
                    d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                    fill="currentColor"
                  />
                  <path
                    d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                    fill="currentColor"
                  />
                  <path
                    d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                    fill="currentColor"
                  />
                  <path
                    d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                    fill="currentColor"
                  />
                  <path
                    d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                    fill="currentColor"
                  />
                  <path
                    d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                  <em>
                    " I'm absolutely floored by the level of care and attention
                    to detail the team at HS have put into this theme and for
                    one can guarantee that I will be a return customer. "
                  </em>
                </p>
              </div>
              <div className="p-4 rounded-b-xl md:px-6">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                  Nicole Grazioso
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  Director Payments &amp; Risk | HubSpot
                </p>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <svg
                  className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300"
                  width={200}
                  height={67}
                  viewBox="0 0 200 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.914 45.0629C197.106 45.0629 200 42.1687 200 38.1767C200 36.1807 199.401 34.2845 198.403 32.9871C197.305 31.5899 195.709 30.7915 193.812 30.7915C191.317 30.7915 188.922 32.6877 186.627 36.6797L186.427 36.9791L186.327 36.6797C185.729 34.9831 185.23 33.5859 184.93 32.7875C184.731 32.1887 184.631 31.9891 184.631 31.8893C184.531 31.4901 184.132 31.1907 183.633 31.1907C183.333 31.1907 183.034 31.2905 182.735 31.4901C182.435 31.6897 182.236 31.8893 182.236 32.1887C179.94 39.3743 178.044 42.8673 176.447 42.8673C176.248 42.8673 176.048 42.7675 175.948 42.6677C175.549 42.1687 175.649 41.0709 175.749 39.5739C175.848 38.4761 175.948 37.1787 175.948 35.8813C175.848 33.2865 174.451 31.6897 172.156 31.6897C169.261 31.6897 167.365 34.7835 166.467 36.5799L166.168 37.0789L166.068 36.4801C165.868 34.1847 165.07 31.4901 162.675 31.4901C159.88 31.4901 157.685 34.7835 156.387 37.5779L156.088 38.2765V37.4781C156.287 33.7855 156.387 31.5899 156.487 30.9911C156.587 30.3923 156.487 29.9931 156.287 29.6937C156.088 29.4941 155.788 29.3943 155.19 29.3943C154.291 29.4941 153.792 29.9931 153.094 31.7895C151.996 34.7835 149.102 41.8693 146.707 41.8693C146.208 41.8693 145.908 41.6697 145.609 41.3703C144.611 40.2725 145.01 37.2785 145.609 33.0869V32.7875C145.908 30.7915 145.409 30.3923 144.311 30.1927C144.212 30.1927 144.112 30.1927 144.012 30.1927C143.114 30.1927 142.715 30.9911 141.916 33.2865C140.519 37.3783 138.623 41.5699 136.527 41.5699C136.427 41.5699 136.327 41.5699 136.327 41.5699C135.23 41.3703 135.23 39.6737 135.23 37.5779C135.23 36.3803 135.23 35.0829 135.13 33.9851C134.83 31.8893 133.533 30.5919 131.836 30.4921C128.443 30.4921 126.248 34.7835 125.15 37.3783L124.95 37.9771L124.85 37.3783C124.651 35.6817 124.551 34.0849 124.451 32.3883V32.2885C130.739 24.4043 133.533 18.6158 133.633 13.7256C133.633 10.6318 132.236 8.7356 129.741 8.7356C127.944 8.7356 123.752 10.2326 122.255 24.0051C121.956 26.5999 121.856 29.1947 121.856 31.7895C118.962 35.9811 112.774 43.1667 106.786 43.1667C101.297 43.1667 97.006 38.7755 97.006 30.9911C97.006 20.6118 104.391 14.2246 109.88 14.2246C111.078 14.2246 112.076 14.524 112.874 15.2226C113.673 15.9212 114.072 16.8194 114.072 17.8174C114.072 19.2146 113.573 20.013 113.174 20.7116C113.074 20.9112 112.974 21.1108 112.874 21.3104C112.774 21.51 112.675 21.8094 112.774 22.009C112.874 22.3084 113.273 22.4083 113.772 22.4083C115.07 22.4083 117.066 20.512 117.066 17.6178C117.066 14.6238 114.571 11.53 109.98 11.53C103.094 11.53 93.9122 19.015 93.9122 31.2905C93.9122 39.8733 99.3014 45.8613 106.687 45.8613C111.876 45.8613 117.066 42.1687 121.557 35.8813L121.856 35.4821V35.9811C121.956 38.2765 122.156 40.0729 122.255 41.3703C122.355 42.1687 122.355 42.8673 122.355 43.1667C122.355 43.8653 122.455 44.4641 122.754 44.7635C123.054 45.0629 123.453 45.2625 124.052 45.2625C125.05 45.2625 125.25 44.5639 125.649 42.8673L125.749 42.3683C126.248 40.2725 128.144 33.4861 130.938 33.4861C131.437 33.4861 131.737 33.5859 132.036 33.8853C132.635 34.5839 132.535 35.8813 132.535 37.4781C132.535 38.4761 132.435 39.4741 132.535 40.4721C132.834 43.0669 133.932 44.3643 136.028 44.4641C138.124 44.4641 140.419 42.1687 141.617 40.0729L141.816 39.6737L141.916 40.1727C142.116 41.2705 143.114 45.0629 146.108 45.0629C148.902 45.0629 151.198 42.1687 153.792 36.1807L154.092 35.3823V36.2805C153.992 38.5759 153.892 41.2705 153.892 43.4661C153.892 45.1627 154.092 45.7615 154.79 45.7615H154.99C155.689 45.7615 156.188 45.3623 156.487 44.4641C158.483 37.6777 160.08 34.4841 161.776 34.4841C163.373 34.4841 163.573 37.4781 163.673 42.7675V43.1667C163.673 44.9631 163.772 45.8613 164.97 45.8613C165.868 45.8613 166.068 45.1627 166.467 43.4661C166.567 43.1667 166.667 42.7675 166.766 42.3683C168.363 36.8793 169.661 34.6837 171.257 34.6837C172.655 34.6837 172.755 36.0809 172.755 36.5799C172.854 37.5779 172.754 38.6757 172.555 39.6737C172.455 40.6717 172.355 41.5699 172.355 42.5679C172.455 44.6637 173.653 45.8613 175.649 45.9611C178.343 45.9611 180.639 42.8673 182.735 36.7795L182.834 36.3803L183.034 36.7795C183.433 37.7775 183.932 39.0749 184.331 40.5719V40.6717V40.7715C182.335 45.2625 180.838 50.2526 180.838 52.9472C180.838 56.4402 182.435 58.7356 184.93 58.8354C186.327 58.8354 189.421 58.3364 189.521 53.2466C189.521 51.1508 189.022 48.2566 188.024 44.5639L187.924 44.1647L188.323 44.3643C190.02 44.5639 191.517 45.0629 192.914 45.0629ZM124.651 27.8973C124.751 26.5999 124.85 25.4023 124.95 24.2047C125.948 16.7196 127.944 11.4302 129.94 11.4302C130.838 11.4302 131.337 12.1288 131.337 13.526C131.337 16.9192 129.142 21.8094 124.95 27.9971L124.651 28.4961V27.8973ZM186.826 54.9432C186.527 55.3424 186.128 55.542 185.529 55.542C184.93 55.542 184.431 55.3424 184.132 54.9432C183.234 53.7456 183.533 50.9512 184.93 45.8613C185.13 45.2625 185.329 44.6637 185.529 44.0649L185.729 43.5659L185.828 44.0649C187.525 49.8534 187.924 53.546 186.826 54.9432ZM187.425 39.8733L187.325 39.5739V39.4741C189.222 35.4821 191.517 33.1867 193.413 33.1867C195.609 33.1867 197.106 35.1827 197.106 37.9771C197.106 39.8733 196.307 40.8713 195.609 41.4701C194.81 42.1687 193.812 42.4681 192.715 42.4681C190.12 42.5679 188.423 41.1707 187.425 39.8733ZM64.2715 44.3643C67.2655 44.1647 69.6607 40.0729 70.4591 38.3763L70.6587 37.8773L70.7585 38.3763C71.1577 40.7715 72.5549 44.8633 76.6467 44.9631C78.4431 44.9631 80.4391 43.8653 82.5349 41.7695L82.7345 41.5699L82.8343 41.7695C84.2315 44.0649 86.0279 45.3623 88.0239 45.1627C90.9182 44.9631 92.7146 42.9671 92.8144 41.5699C92.8144 41.1707 92.7146 40.8713 92.515 40.6717C92.2156 40.3723 91.9162 40.3723 91.6168 40.5719L91.517 40.6717C90.8184 41.3703 89.6208 42.5679 88.2236 42.5679C86.5269 42.6677 85.3293 41.6697 84.5309 39.5739V39.4741L84.6307 39.3743C89.2216 33.2865 92.515 24.1049 92.2156 17.9172C92.1158 15.023 91.2176 11.6298 88.1238 11.6298H87.8244C86.6267 11.7296 85.5289 12.2286 84.6307 13.3264C81.7365 16.6198 80.2395 24.6039 80.7385 33.6857C80.8383 35.5819 81.1377 37.3783 81.7365 38.9751V39.0749L81.6367 39.1747C79.9401 41.1707 78.2435 42.2685 76.8463 42.2685C73.5529 42.2685 73.6527 36.7795 73.9521 32.1887C74.0519 31.1907 74.0519 30.5919 73.7525 30.1927C73.5529 29.8933 73.1537 29.7935 72.6547 29.7935H72.5549C71.3573 29.7935 71.1577 29.9931 70.5589 31.7895C69.3613 35.3823 66.8663 41.3703 64.3713 41.3703C63.6727 41.3703 63.1737 41.1707 62.7745 40.6717C61.5769 39.1747 62.4751 35.3823 63.1737 32.2885C63.2735 31.7895 63.4731 31.1907 63.5729 30.6917C63.7725 29.9931 63.6727 29.3943 63.4731 29.0949C63.1737 28.7955 62.6747 28.5959 62.0759 28.6957C60.978 28.7955 60.3792 29.1947 59.98 31.1907L59.8802 31.5899V31.6897C59.3812 30.9911 58.483 30.1927 56.8862 30.1927C56.7864 30.1927 56.5868 30.1927 56.3872 30.1927C54.5908 30.2925 52.5948 31.5899 51.0978 33.3863C49.4012 35.5819 48.503 38.2765 48.8024 41.0709C48.8024 41.1707 48.8024 41.3703 48.9022 41.4701V41.5699L48.8024 41.6697C47.8044 42.7675 46.7066 43.3663 45.7086 43.3663C44.1118 43.3663 43.2136 42.1687 43.2136 40.1727C43.2136 36.7795 45.509 26.6997 45.509 23.0071C45.509 19.1148 43.8124 17.019 40.7186 16.9192C36.3273 16.9192 32.8343 21.9092 29.5409 32.1887C29.2415 33.1867 28.9421 34.1847 28.6427 35.1827L28.1437 36.7795L28.2435 35.1827C28.5429 31.6897 28.7425 28.2965 28.8423 24.8035C29.0419 19.8134 28.3433 16.6198 26.7465 15.023C25.9481 14.1248 24.8503 13.7256 23.3533 13.7256C17.9641 13.7256 15.3693 22.8075 13.4731 29.2945C12.8743 31.1907 11.7764 35.5819 11.0778 38.5759L11.477 37.8773C11.7764 34.0849 12.7745 24.7037 12.6747 19.6138C12.5749 14.1248 10.7784 11.6298 6.78643 11.6298C4.59082 11.6298 3.19361 12.7276 2.29541 13.6258C0.798403 14.9232 0 17.019 0 18.8154C0 19.9132 0.698603 20.9112 1.1976 20.9112C1.49701 20.9112 1.69661 20.4122 1.79641 20.2126C3.09381 16.1208 4.69062 14.1248 6.68663 14.1248C7.58483 14.1248 8.18363 14.4242 8.68263 14.9232C10.2794 16.6198 9.98004 21.3104 9.48104 29.8933C9.38124 32.4881 9.18164 35.6817 8.98204 39.1747C8.98204 39.7735 8.88224 40.3723 8.88224 40.9711C8.68263 43.4661 8.58283 45.3623 9.48104 45.4621C10.6786 45.6617 11.477 45.1627 11.8762 43.9651C12.475 42.1687 13.7725 37.2785 16.3673 28.3963C18.8623 19.9132 20.7585 16.7196 23.1537 16.7196C25.9481 16.7196 26.1477 21.51 25.6487 31.5899C25.5489 33.6857 25.3493 36.1807 25.2495 38.7755C25.2495 39.1747 25.2495 39.4741 25.2495 39.8733C25.1497 42.0689 25.0499 43.7655 25.6487 44.4641C25.8483 44.6637 26.1477 44.7635 26.4471 44.7635C27.6447 44.7635 28.0439 43.6657 28.6427 41.9691C28.7425 41.6697 28.8423 41.3703 28.9421 40.9711C33.0339 29.5939 36.1277 19.7136 40.2196 19.7136C41.4172 19.7136 42.4152 20.7116 42.4152 22.7077C42.4152 27.1987 40.2196 35.8813 40.2196 40.2725C40.2196 41.8693 40.7186 43.2665 41.517 44.2645C42.4152 45.2625 43.6128 45.8613 45.1098 45.8613C46.507 45.8613 47.9042 45.1627 49.4012 43.8653L49.501 43.7655L49.6008 43.8653C50.5988 45.1627 52.0958 45.8613 53.7924 45.6617C56.3872 45.4621 58.483 43.1667 59.2814 41.0709L59.481 40.6717L59.6806 41.0709C60.2794 42.6677 61.5769 44.6637 64.2715 44.3643ZM87.7246 14.6238C88.024 14.6238 88.3233 14.7236 88.523 15.023C89.521 16.4202 89.521 21.4102 87.8244 27.0989C86.8263 30.3923 85.5289 33.3863 83.9321 35.9811L83.6327 36.3803L83.5329 35.8813C83.3333 34.4841 83.2335 33.0869 83.2335 31.8893C82.9341 23.3065 85.5289 14.7236 87.7246 14.6238ZM59.481 34.6837C58.5828 38.2765 56.8862 42.5679 53.7924 42.8673H53.493C52.1956 42.8673 51.497 42.0689 51.3972 40.3723C51.1976 38.2765 52.0958 35.8813 53.6926 34.1847C54.6906 33.0869 55.7884 32.4881 56.7864 32.4881C58.1836 32.5879 59.0818 33.5859 59.481 34.6837ZM73.7525 21.51C72.6547 21.51 71.6567 22.4082 71.6567 23.5061C71.6567 24.6039 72.5549 25.5021 73.6527 25.5021V25.7017V25.5021C74.7505 25.5021 75.6487 24.6039 75.7485 23.5061C75.8483 22.4082 74.9501 21.51 73.7525 21.51ZM145.309 21.51C144.212 21.51 143.214 22.4082 143.214 23.5061C143.214 24.6039 144.112 25.5021 145.21 25.5021V25.7017V25.5021C146.307 25.5021 147.305 24.6039 147.305 23.5061C147.405 22.4082 146.507 21.51 145.309 21.51Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                  <em>
                    " With Preline, we're able to easily track our performance
                    in full detail. It's become an essential tool for us to grow
                    and engage with our audience. "
                  </em>
                </p>
              </div>
              <div className="p-4 rounded-b-xl md:px-6">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                  Josh Tyson
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  Product Manager | Capsule
                </p>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex-auto p-4 md:p-6">
                <svg
                  className="w-20 h-auto sm:w-24 text-gray-700 dark:text-neutral-300"
                  width={140}
                  height={47}
                  viewBox="0 0 140 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M96.2674 23.8697C93.7525 23.5204 92.7744 22.8916 92.8443 21.9136C92.984 20.1671 95.1497 19.9575 96.477 20.0274C99.0619 20.2369 99.6207 22.4725 99.6207 22.7519L102.136 22.5423C101.996 20.9355 100.669 17.7918 96.8962 17.5124C94.8004 17.3727 92.984 17.7918 91.7964 18.8397C90.8882 19.6082 90.1197 20.7958 89.98 21.9835C89.7006 25.8258 93.473 26.3847 95.8483 26.734C98.8523 27.1531 99.5509 27.5723 99.481 28.69C99.481 29.2489 99.1317 29.8078 98.7126 30.1571C98.0838 30.6461 96.8263 30.8557 95.5688 30.716C92.7046 30.4365 92.495 28.6202 92.495 28.2709L89.98 28.3407C89.98 29.8777 91.0279 32.8817 95.2894 33.3707C97.5948 33.6501 99.481 32.9515 100.459 32.2529C101.577 31.4146 102.206 30.0174 102.275 28.69C102.485 24.708 98.6427 24.219 96.2674 23.8697Z"
                      fill="currentColor"
                    />
                    <path
                      d="M110.659 30.7161C114.431 30.7161 114.152 26.4546 114.152 26.4546V17.9316H117.086V26.3847C117.086 26.3847 117.086 26.4546 117.086 26.6642C117.086 27.9217 116.946 33.3009 110.728 33.3009H110.519C104.301 33.3009 104.162 27.9915 104.162 26.6642C104.162 26.5245 104.162 26.3847 104.162 26.3847V17.9316H107.096V26.3847C107.166 26.3847 106.886 30.7161 110.659 30.7161Z"
                      fill="currentColor"
                    />
                    <path
                      d="M136.926 28.3405C136.088 29.8076 134.411 30.6459 132.595 30.6459C130.08 30.6459 128.054 29.0392 127.705 26.5242H139.93C139.93 26.1749 139.93 25.6859 139.93 25.3366C139.93 20.5861 136.717 17.5122 132.455 17.5122C128.194 17.5122 124.771 20.5162 124.771 25.3366C124.771 30.1569 128.194 33.2308 132.455 33.2308C135.11 33.2308 137.625 32.113 139.022 29.8775L136.926 28.3405ZM132.525 20.2368C134.97 20.2368 136.717 21.7737 137.136 24.2887H127.774C128.124 21.7038 130.01 20.2368 132.525 20.2368Z"
                      fill="currentColor"
                    />
                    <path
                      d="M80.9681 17.582C78.8723 17.582 76.7066 18.5601 75.7286 20.2367V17.8615H72.7944V40.2168H75.7286V30.7158C76.7066 32.4623 78.8723 33.3006 80.9681 33.3006C85.0898 33.3006 88.513 30.2966 88.513 25.4762C88.513 20.7257 85.0898 17.582 80.9681 17.582ZM80.6886 30.576C78.2435 30.576 75.6587 28.8295 75.6587 25.616C75.6587 22.4024 78.1737 20.3066 80.8284 20.3066C83.5529 20.3066 85.7186 22.3325 85.7186 25.3365C85.6487 28.4104 83.3433 30.576 80.6886 30.576Z"
                      fill="currentColor"
                    />
                    <path
                      d="M122.605 9.68799H119.67V32.9515H122.605V9.68799Z"
                      fill="currentColor"
                    />
                    <path
                      d="M64.4113 17.4424C64.3414 17.4424 64.2716 17.4424 64.2017 17.4424C64.2017 17.4424 61.6867 17.4424 59.3115 18.4204L59.5909 19.1889L60.1498 20.7957C60.9881 20.4464 62.3853 20.0272 64.2017 19.9574C64.2716 19.9574 64.3414 19.9574 64.4113 19.9574C67.6249 19.9574 67.6947 22.8915 67.6947 22.8915V23.6599L62.6648 23.5901C62.3155 23.5901 60.2895 23.5901 58.8225 24.9873C58.4732 25.3366 58.1937 25.6859 57.9841 26.1051C57.7047 26.7338 57.4951 27.4324 57.4951 28.2009C57.4951 29.1789 57.7746 30.0871 58.1937 30.8556C58.4033 31.2049 58.6827 31.5542 58.9622 31.8336C59.9402 32.7418 61.3374 33.3007 62.8744 33.3007C63.0141 33.3007 63.1538 33.3007 63.2237 33.3007C64.9702 33.2308 66.577 32.5322 67.6249 30.8556V32.9514H70.2097V23.4504C70.2796 21.0053 68.7426 17.4424 64.4113 17.4424ZM63.1538 30.9254C62.2456 30.9953 60.1498 30.5063 60.1498 28.2009C60.1498 27.5721 60.7087 26.1051 62.5251 26.1051C64.3414 26.1051 67.555 26.1051 67.555 26.1051C67.6249 28.8995 65.9482 30.7857 63.1538 30.9254Z"
                      fill="currentColor"
                    />
                    <path
                      d="M49.1118 30.3667C44.4311 30.3667 40.8682 26.5942 40.8682 21.9136C40.8682 17.233 44.501 13.3906 49.1118 13.3906C51.3473 13.3906 53.3034 14.2988 54.7704 15.696L56.5169 13.3208C54.6307 11.5743 51.976 10.5264 49.1118 10.5264C42.8243 10.5264 37.8643 15.6262 37.8643 21.9136C37.8643 28.201 42.8243 33.3008 49.1118 33.3008C51.6966 33.3008 54.002 32.4625 55.8183 31.1351L54.8403 28.4106C53.2335 29.5284 51.0678 30.3667 49.1118 30.3667Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 30.2965H3.63273V28.061H8.24351V30.2965H11.8064V12.9712H0V30.2965Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.0938 8.08105C17.5349 8.08105 17.1157 8.50022 17.1157 9.0591C17.1157 9.61798 17.5349 10.0371 18.0938 10.0371C18.6526 10.0371 19.0718 9.61798 19.0718 9.0591C19.1417 8.57008 18.6526 8.08105 18.0938 8.08105Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.0938 12.6221C17.5349 12.6221 17.1157 13.0412 17.1157 13.6001C17.1157 14.159 17.5349 14.5782 18.0938 14.5782C18.6526 14.5782 19.0718 14.159 19.0718 13.6001C19.1417 13.1111 18.6526 12.6221 18.0938 12.6221Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.0938 17.2329C17.5349 17.2329 17.1157 17.6521 17.1157 18.211C17.1157 18.7698 17.5349 19.189 18.0938 19.189C18.6526 19.189 19.0718 18.7698 19.0718 18.211C19.1417 17.6521 18.6526 17.2329 18.0938 17.2329Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.7744 8.08105C22.2155 8.08105 21.7964 8.50022 21.7964 9.0591C21.7964 9.61798 22.2155 10.0371 22.7744 10.0371C23.3333 10.0371 23.7525 9.61798 23.7525 9.0591C23.7525 8.57008 23.3333 8.08105 22.7744 8.08105Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.7744 12.6221C22.2155 12.6221 21.7964 13.0412 21.7964 13.6001C21.7964 14.159 22.2155 14.5782 22.7744 14.5782C23.3333 14.5782 23.7525 14.159 23.7525 13.6001C23.7525 13.1111 23.3333 12.6221 22.7744 12.6221Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.7744 17.2329C22.2155 17.2329 21.7964 17.6521 21.7964 18.211C21.7964 18.7698 22.2155 19.189 22.7744 19.189C23.3333 19.189 23.7525 18.7698 23.7525 18.211C23.7525 17.6521 23.3333 17.2329 22.7744 17.2329Z"
                      fill="currentColor"
                    />
                    <path
                      d="M27.3154 8.08105C26.7566 8.08105 26.3374 8.50022 26.3374 9.0591C26.3374 9.61798 26.7566 10.0371 27.3154 10.0371C27.8743 10.0371 28.2935 9.61798 28.2935 9.0591C28.2935 8.57008 27.8743 8.08105 27.3154 8.08105Z"
                      fill="currentColor"
                    />
                    <path
                      d="M27.3154 12.6221C26.7566 12.6221 26.3374 13.0412 26.3374 13.6001C26.3374 14.159 26.7566 14.5782 27.3154 14.5782C27.8743 14.5782 28.2935 14.159 28.2935 13.6001C28.2935 13.1111 27.8743 12.6221 27.3154 12.6221Z"
                      fill="currentColor"
                    />
                    <path
                      d="M27.3154 17.2329C26.7566 17.2329 26.3374 17.6521 26.3374 18.211C26.3374 18.7698 26.7566 19.189 27.3154 19.189C27.8743 19.189 28.2935 18.7698 28.2935 18.211C28.2935 17.6521 27.8743 17.2329 27.3154 17.2329Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.07776 24.2885C2.79433 24.2186 0.0697788 26.8035 -8.15348e-05 30.017C-0.0699418 33.2306 2.51489 35.9552 5.79832 36.0949C9.08176 36.1647 11.7364 33.5799 11.8762 30.2965C11.8762 27.0829 9.29134 24.3584 6.07776 24.2885ZM7.89413 32.3224H3.91209V28.3404H7.89413V32.3224Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M5.93812 19.1189C9.21766 19.1189 11.8762 16.4603 11.8762 13.1808C11.8762 9.90126 9.21766 7.24268 5.93812 7.24268C2.65859 7.24268 0 9.90126 0 13.1808C0 16.4603 2.65859 19.1189 5.93812 19.1189Z"
                      fill="white"
                    />
                    <path
                      d="M16.627 23.1709V35.3266H28.7826V23.1709H16.627ZM26.3375 31.9733H19.1419V30.4364H26.3375V31.9733ZM26.3375 27.9913H19.1419V26.4543H26.3375V27.9913Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={140} height={47} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                  <em>
                    " In September, I will be using this theme for 2 years. I
                    went through multiple updates and changes and I'm very glad
                    to see the consistency and effort made by the team. "
                  </em>
                </p>
              </div>
              <div className="p-4 rounded-b-xl md:px-6">
                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                  Luisa
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  Senior Director of Operations | Fitbit
                </p>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Testimonials */}
      </>
    </div>
  );
};

export default Test;