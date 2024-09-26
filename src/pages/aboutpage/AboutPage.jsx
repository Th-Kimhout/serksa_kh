import Members from "./Member";
import work from "../../assets/Image/Team work.gif"
import study from "../../assets/Image/Studying.gif"
import teacherSmey from "../../assets/Image/teacherSmey.jpg"
import teacherPhea from "../../assets/Image/teacherPhea.jpg"

export function AboutUsSection() {
  return (
    <main className="container mx-auto mt-8 px-4 font-khmerFont">
      <div className="flex flex-wrap mx-auto items-center text-center">
        {/* Left Side - Text Content */}
        <div className="container mx-auto">
          <h1 className="text-4xl font-khmerFont font-bold text-blueLight mb-4 text-center ">
            អំពីពួកយើង
          </h1>
          <h2 className="text-2xl mb-4 dark:text-textDark">
            <span className="text-primary font-semibold font-khmerFont">
              សិក្សា
            </span>{" "}
            បានផ្ដល់ឱកាសជាច្រើនទៅដល់យុវជនកម្ពុជាដើម្បីរៀនដោយមិនឥតគិតថ្លៃ
          </h2>
          <p className="text-textBlack mb-4 font-english text-lg dark:text-textDark">
            ការផ្សព្វផ្សាយអប់រំនៅកម្ពុជាត្រូវបានបង្កើតឡើងជាមួយនឹងចក្ខុវិស័យនៃការផ្លាស់ប្តូរការអប់រំនៅកម្ពុជា
            ដោយប្រើប្រាស់ថាមពលរួមបញ្ចូលគ្នានៃអ្នកជំនាញបច្ចេកទេស
            និងគ្រូបង្រៀនកម្ពុជា ដែលធ្វើការរួមគ្នាដើម្បីទ្រទ្រង់
            និងបន្តពង្រីកសេវាអប់រំដល់សិស្សានុសិស្ស
            និងប្រជាពលរដ្ឋដែលមានបំណងចង់សិក្សា។
            បេសកកម្មរបស់យើងគឺផ្តល់ខ្លឹមសារអប់រំ សម្ភារៈសិក្សា
            និងវគ្គសិក្សាតាមអ៊ីនធឺណិតប្រកបដោយគុណភាពខ្ពស់ដោយឥតគិតថ្លៃដល់សិស្សានុសិស្ស
            និងប្រជាពលរដ្ឋក្រីក្រទូទាំងប្រទេសកម្ពុជា។
            យើងជឿថាការអប់រំគឺជាសិទ្ធិជាមូលដ្ឋាន
            និងជាឧបករណ៍ដ៏មានអានុភាពដើម្បីបង្កើតអនាគតដ៏ត្រចះត្រចង់សម្រាប់ទាំងអស់គ្នា។
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-primary">
            ចូលរួមជាមួយយើង
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="w-full mt-10">
          <img
            className="mx-auto rounded-md"
            src={work}
            alt="Office Space"
            // className="rounded-lg shadow-md mb-3 ml-20"
          />
          {/* <img
            src="./img/work.jfif"
            alt="Laptop Workspace"
            className="rounded-lg shadow-md"
          /> */}
        </div>
      </div>

      <section className="container mx-auto mt-16 px-4 font-english ">
        <h2 className="text-3xl font-bold text-blueLight text-center mb-8 mt-5">
          បេសកម្មរបស់យើង។
        </h2>
        <div className="flex flex-wrap items-center">
          {/* Left Side - Image */}
          <div className="w-full pr-4">
            <img
              src={study}
              alt="Educational Concept"
              className="rounded-lg mx-auto shadow-md"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="container mx-auto lg:mt-0 text-Description font-khmerFont ">
            <p
              className="text-textBlack ml-5"
              data-aos="fade-down-left"
              data-aos-duration="1000"
              text-align="center"
            >
              <span className="font-khmerFont block text-center font-bold text-Title dark:text-textDark">
                {" "}
                បេសកម្មរបស់យើងគឺ៖
              </span>{" "}
              <br></br>
              -ផ្តល់ខ្លឹមសារអប់រំដោយឥតគិតថ្លៃ៖
              យើងផ្តល់ជូននូវកម្មវិធីអប់រំជាច្រើន ចាប់ពីការអប់រំទូទៅ
              រហូតដល់ជំនាញជីវិត ដែលអាចចូលប្រើបានដោយសេរីសម្រាប់មនុស្សគ្រប់គ្នា។
              <br></br>- លើកកម្ពស់សមភាពក្នុងវិស័យអប់រំ៖
              តាមរយៈការកាត់បន្ថយតម្រូវការសម្រាប់ការអប់រំដែលមានតម្លៃថ្លៃ
              យើងមានបំណងបង្កើតទិដ្ឋភាពអប់រំប្រកបដោយសមធម៌បន្ថែមទៀតសម្រាប់ប្រទេសកម្ពុជា។
              ផ្តល់អំណាចដល់អ្នកសិក្សា៖ យើងប្តេជ្ញាផ្តល់សិទ្ធិអំណាចដល់សិស្ស
              និងប្រជាពលរដ្ឋជាមួយនឹងចំណេះដឹង
              និងជំនាញដែលពួកគេត្រូវការដើម្បីទទួលបានជោគជ័យ។
            </p>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="container mx-auto mt-16 px-4 font-khmerFont">
        <h2
          className="text-3xl font-bold  text-center mb-8 text-blueLight"
          data-aos="fade-up"
          data-aos-delay="30"
          data-aos-duration="10"
        >
          វិធីសាស្រ្តរបស់យើង។
        </h2>
        <p className="text-xl text-left font-khmerFont mb-8 dark:text-textDark">
          
          <p className="text-primary text-center text-Title font-bold font-khmerFont">
            សិក្សា{" "}
            <span className="text-black font-normal dark:text-textDark">
              ប្តេជ្ញាផ្តល់នូវបទពិសោធន៍អប់រំតាមអ៊ីនធឺណិត “សាមញ្ញ ព័ត៌មាន
              និងរីករាយ”។
            </span>
          </p>
          <p>+វិធីសាស្រ្តរបស់យើងរួមមាន:</p>
          <p>
            -មាតិកាឌីជីថល៖
            ការប្រើប្រាស់បច្ចេកវិទ្យាដើម្បីបង្កើតសម្ភារៈអប់រំឌីជីថលដែលទាក់ទាញ
            និងអន្តរកម្ម។
          </p>
          <p>
            -ការសិក្សាដែលអាចចូលដំណើរការបាន៖
            ការធានាថាធនធានរបស់យើងអាចរកបានសម្រាប់មនុស្សគ្រប់គ្នា
            ជាពិសេសសិស្សដែលខ្វះខាតនៅតំបន់ដាច់ស្រយាល។ ការកែលម្អឥតឈប់ឈរ៖
            ការធ្វើបច្ចុប្បន្នភាពជាប្រចាំនូវខ្លឹមសារ និងវិធីសាស្ត្ររបស់យើង
            ដើម្បីបំពេញតាមតម្រូវការអប់រំដែលកំពុងរីកចម្រើនរបស់ទស្សនិកជនរបស់យើង។
          </p>
        </p>
      </section>

      {/* Mentor Section */}
      <section className="relative bg-cover h-full w-full border-none -z-50 font-khmerFont">
        <div className="text-center font-bold font-khmer text-4xl text-primary">
          <h3 data-aos="zoom-in-up" className="pt-4 aos-init aos-animate">
            អ្នកណែនាំរបស់យើង
          </h3>
          <section className="flex flex-wrap-reverse justify-center py-14">
            {/* Mentor 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="10"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%] border-l-[3px] border-b-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blueLight transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src={teacherSmey}
                      alt=""
                      className="h-[120px] w-[120px] object-cover rounded-full border-4 border-white mx-auto"
                    />
                    <h4 className="text-[#172554] text-[18px] font-bold dark:text-blueLight">
                      អ្នកគ្រូ មុំ រស្មី
                    </h4>
                  </div>
                </div>
                <div className="absolute w-[700px] inset-0 bg-gray-50 transform rotate-[30deg] mt-5 origin-top-left -z-10"></div>
              </div>
            </div>

            {/* Mentor 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="10"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute top-0 right-0 w-[50%] h-[50%] border-r-[3px] border-t-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blueLight transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src={teacherPhea}
                      alt=""
                      className="h-[120px] w-[120px] object-cover rounded-full border-4 border-white mx-auto"
                    />
                    <h4 className="text-[#172554] text-[18px] font-bold dark:text-blueLight">
                      អ្នកគ្រូ​ សុិន ស្រីភា
                    </h4>
                  </div>
                </div>
                <div className="absolute w-[700px] inset-0 bg-gray-50 transform rotate-[30deg] mt-5 origin-top-left -z-10"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="container mx-auto">
      <Members/>
      </section>
    </main>
  );
}

export default AboutUsSection;
