import { Container, SectionTitle } from 'components';

export const OurTeam = () => {
  return (
    <Container className="py-14 md:py-32">
      <img
        src="https://myva360.com/wp-content/uploads/2022/12/brush-stroke-63.png.webp"
        alt=""
        className="absolute top-[53%] left-0 -z-10"
      />
      <div className="w-full lg:w-1/2">
        <SectionTitle className="font-extrabold text-secondary">
          Our Team
        </SectionTitle>
        <div className="font-bold text-black/70 mt-2">
          Meet The Ones Who Make It Happen
        </div>
        <div className="mt-5 font-bold text-black/80">
          Our team is made up of qualified, experienced, and vetted
          professionals. They are driven, mature, and constantly upskilling
          themselves so as to evolve and improve. Each member brings with them
          their own unique skill set and working style, which means they can be
          individually matched to each client to create the perfect synergy –
          allowing them to integrate seamlessly into your business and life
        </div>
      </div>
      <div className="flex gap-10 mt-16 flex-col md:flex-row">
        <div className="flex-1">
          <div className="rounded-md shadow-md relative h-full w-full bg-[#4a62ae]">
            <img
              src="https://myva360.com/wp-content/uploads/2022/12/brush-stroke-62-735x1024.png.webp"
              className="absolute inset-0"
            />
            <img
              src="https://myva360.com/wp-content/uploads/2023/05/jelena-mijajlovic-ceo.png.webp"
              className="absolute bottom-0 -left-32 w-[60%]"
            />
            <div className="flex justify-end">
              <div className="w-2/3 h-full relative z-10">
                <div className="pt-6 pr-6 font-bold text-h2 text-white mb-6">
                  Jane Done
                </div>
                <div className="mb-4 font-bold text-sm text-white/50">
                  CEO & Founder
                </div>
                <div className="pr-6 text-white font-bold">
                  Jane is originally from Serbia, and currently lives in
                  Florida, USA. She is a successful entrepreneur, business woman
                  and leader. In 2019 she identified a gap in the market for
                  affordable, qualified and ad hoc virtual assistance. And so
                  she carefully selected a handful of exceptional people, put
                  together a business plan with integrity and respect at the
                  core; and rolled out what is today a successful and healthy
                  company. Jane leads by example – intelligent, pragmatic, kind
                  and friendly.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="https://myva360.com/wp-content/uploads/2022/11/robyn-de-villiers-virtual-assistant-16.jpg.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Robyn de Villiers</div>
                <div className="text-black/70 font-bold text-sm">COO</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="	https://myva360.com/wp-content/uploads/2022/11/lana-snyman-virtual-assistant-10.jpg.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Lana Snyman</div>
                <div className="text-black/70 font-bold text-sm">
                  Lead Account Manager
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="https://myva360.com/wp-content/uploads/2022/11/lerato-moya-virtual-assistant-11.jpg.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Lerato Moya</div>
                <div className="text-black/70 font-bold text-sm">
                  Account Manager
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="https://myva360.com/wp-content/uploads/2023/03/Nina-Beljanski-Virtual-Assistant-180x223px.png.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Nina Beljanski</div>
                <div className="text-black/70 font-bold text-sm">
                  Talent Acquisition Manager
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="https://myva360.com/wp-content/uploads/2022/11/viktorija-stirbyte-virtual-assistant-22.jpg.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Viktorija Stirbyte</div>
                <div className="text-black/70 font-bold text-sm">
                  Virtual Assistant
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="https://myva360.com/wp-content/uploads/2022/11/vasilisa-jovanovic-virtual-assistant-21.jpg.webp"
                  className="w-full"
                  height="335"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <div className="font-bold">Vasilisa Jovanovic</div>
                <div className="text-black/70 font-bold text-sm">
                  Virtual Assistant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/robyn-de-villiers-virtual-assistant-16.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Robyn de Villiers</div>
            <div className="text-black/70 font-bold text-sm">COO</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="	https://myva360.com/wp-content/uploads/2022/11/lana-snyman-virtual-assistant-10.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lana Snyman</div>
            <div className="text-black/70 font-bold text-sm">
              Lead Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/lerato-moya-virtual-assistant-11.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lerato Moya</div>
            <div className="text-black/70 font-bold text-sm">
              Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2023/03/Nina-Beljanski-Virtual-Assistant-180x223px.png.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Nina Beljanski</div>
            <div className="text-black/70 font-bold text-sm">
              Talent Acquisition Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/viktorija-stirbyte-virtual-assistant-22.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Viktorija Stirbyte</div>
            <div className="text-black/70 font-bold text-sm">
              Virtual Assistant
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/vasilisa-jovanovic-virtual-assistant-21.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Vasilisa Jovanovic</div>
            <div className="text-black/70 font-bold text-sm">
              Virtual Assistant
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/robyn-de-villiers-virtual-assistant-16.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Robyn de Villiers</div>
            <div className="text-black/70 font-bold text-sm">COO</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="	https://myva360.com/wp-content/uploads/2022/11/lana-snyman-virtual-assistant-10.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lana Snyman</div>
            <div className="text-black/70 font-bold text-sm">
              Lead Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/lerato-moya-virtual-assistant-11.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lerato Moya</div>
            <div className="text-black/70 font-bold text-sm">
              Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2023/03/Nina-Beljanski-Virtual-Assistant-180x223px.png.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Nina Beljanski</div>
            <div className="text-black/70 font-bold text-sm">
              Talent Acquisition Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/viktorija-stirbyte-virtual-assistant-22.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Viktorija Stirbyte</div>
            <div className="text-black/70 font-bold text-sm">
              Virtual Assistant
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/vasilisa-jovanovic-virtual-assistant-21.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Vasilisa Jovanovic</div>
            <div className="text-black/70 font-bold text-sm">
              Virtual Assistant
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/robyn-de-villiers-virtual-assistant-16.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Robyn de Villiers</div>
            <div className="text-black/70 font-bold text-sm">COO</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="	https://myva360.com/wp-content/uploads/2022/11/lana-snyman-virtual-assistant-10.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lana Snyman</div>
            <div className="text-black/70 font-bold text-sm">
              Lead Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2022/11/lerato-moya-virtual-assistant-11.jpg.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Lerato Moya</div>
            <div className="text-black/70 font-bold text-sm">
              Account Manager
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-md shadow-md overflow-hidden">
            <img
              src="https://myva360.com/wp-content/uploads/2023/03/Nina-Beljanski-Virtual-Assistant-180x223px.png.webp"
              loading="lazy"
              className="w-full"
              height="335"
            />
          </div>
          <div className="mt-3">
            <div className="font-bold">Nina Beljanski</div>
            <div className="text-black/70 font-bold text-sm">
              Talent Acquisition Manager
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
