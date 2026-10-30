import Image from 'next/image';

export default function BrandLogo() {
  return (
    <Image
      src="/software-lab-logo.webp"
      alt="The Software Lab"
      width={420}
      height={100}
      className="h-10 w-[168px] rounded-sm object-contain"
    />
  );
}
