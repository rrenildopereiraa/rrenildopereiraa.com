import { ImageResponse } from "next/og";
import { metaData } from "app/config";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || metaData.title;

  return new ImageResponse(
    (
      <div tw="d-f fd-c w-full h-full ai-c jc-c bg-white">
        <div tw="d-f fd-c md:fd-r w-full py-12 px-4 md:ai-c jc-sb p-8">
          <h2 tw="d-f fd-c fs-md fw-700 ls-2 ta-l">{title}</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
