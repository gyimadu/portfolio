import Image from 'next/image';

export default function PolaroidImages() {
  return (
    <div className="relative w-full h-[200px] mt-4 md:hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]">
        <div className="relative w-full">
          <div className="absolute left-0 -rotate-6 transform origin-center">
            <div className="bg-white p-2 shadow-lg">
              <Image
                src="/me1.jpeg"
                alt="Michael Gyimadu"
                width={100}
                height={120}
                className="w-[100px] h-[120px] object-cover"
              />
            </div>
          </div>
          <div className="absolute right-0 rotate-6 transform origin-center">
            <div className="bg-white p-2 shadow-lg">
              <Image
                src="/me2.jpg"
                alt="Michael Gyimadu"
                width={100}
                height={120}
                className="w-[100px] h-[120px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 