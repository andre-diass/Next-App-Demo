import Image from 'next/image';
import Link from 'next/link';
import { useTranslate } from 'hooks/useTranslate';

interface FooterListProps {
  title: string;
  items: { to: string; label: string }[];
}

function FooterList({ title, items }: FooterListProps) {
  return (
    <div>
      <h1 className="mb-2">
        <span className="uppercase text-neutral-600 text-sm font-semibold">
          {title}
        </span>
      </h1>

      <ul>
        {items.map((x) => (
          <Link
            href={x.to}
            key={'key' + x.to}
            className="text-sm hover:text-neutral-950  text-neutral-600"
          >
            <li className="mb-2">{x.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default function NewFooter() {
  const { translate } = useTranslate();
  return (
    <>
      <footer className="mx-auto p-10 bg-sky-50">
        <div className="flex gap-20">
          <div className="flex-col ">
            <Link href="/index">
              <Image
                width={200}
                height={200}
                className="h-8 mb-3 "
                src="/image/amaztrace-light.svg"
                alt="logo"
              />
            </Link>
            <p className="text-stone-600 max-w-md ml-8">
              Solução de rastreabilidade de produtos amazônicos usando a
              tecnologia de blockchain
            </p>
          </div>
          <FooterList
            title="Navegação"
            items={[
              {
                to: '/amaztrace-enterprise',
                label: 'Amaztrace Enterprise',
              },
              {
                to: '/amaztrace-lite',
                label: 'Amaztrace Lite',
              },
              {
                to: '/about-us',
                label: 'Sobre nós',
              },
              {
                to: '/Contato',
                label: 'Contato',
              },
            ]}
          />
          <div className="flex-col">
            <h1 className="uppercase mb-2 text-neutral-600 text-sm font-semibold">
              {' '}
              Contate-nós
            </h1>
            <div className="flex-col space-y-0.4 text-sm text-neutral-600">
              <p>
                Amaztrace inc.
                <br />
                Avenida Lua 1346, marco zero
                <br />
                Macapa - AP, Brasil
                <p className="mt-2">info@amaztrace.com</p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
