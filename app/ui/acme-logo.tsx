import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { dancingScript } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${dancingScript.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-14 w-14 rotate-[15deg]" />
      <p className="ml-3 text-[40px]">Minh</p>
    </div>
  );
}
