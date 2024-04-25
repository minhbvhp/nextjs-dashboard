import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { dancingScript } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${dancingScript.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="ml-3 text-[44px]">Dự án test</p>
    </div>
  );
}
