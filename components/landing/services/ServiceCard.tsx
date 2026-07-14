import Card from "@/components/common/Card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  button: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  button,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card
      className={
        featured
          ? "relative border-purple-500 bg-gradient-to-b from-purple-900/30 to-zinc-900"
          : "relative"
      }
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
          MOST POPULAR
        </span>
      )}

      <div className="flex flex-1 flex-col p-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-auto pt-8">

          <p className="text-3xl font-bold text-white">
            {price}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full justify-center rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            {button}
          </a>

        </div>

      </div>
    </Card>
  );
}