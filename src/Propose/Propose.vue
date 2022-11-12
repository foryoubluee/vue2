<template>
  <div class="w-full flex justify-center">
    <div class="w-full overflow-x-hidden max-w-[1440px]">
      <div id="hero-image" class="w-full">
        <img v-if="isMobile()" class="w-full" src="../assets/img_kv_proposal_sp@2x.png" alt="img_kv_proposal_sp.png" />
        <img v-else class="w-full" src="../assets/img_kv_proposal/img_kv_proposal@2x.png" alt="img_kv_proposal_sp.png" />
      </div>
      <!-- Proposal Service and Survey Section | プロポーズサービス Section -->
      <section class="w-full px-[20px] py-[40px] font-yumincho grid place-content-center lg:py-[70px]">
        <div class="flex font-medium max-w-[760px] text-center flex-col [&>h1]:mb-[30px] text-lg">
          <h1>プロポーズサービス</h1>
          <div class="w-full flex justify-center mb-8">
            <p class="max-w-[310px] lg:max-w-[580px]">４℃ブライダルでは、男性の婚約指輪購入の お悩みや不安を解決する, さまざまなサービスをご用意しています。</p>
          </div>
          <img v-if="isMobile()" src="../assets/img_survey_sp.svg" alt="image survey" />
          <img v-else src="../assets/img_survey.svg" alt="image survey" />
        </div>
      </section>
      <!-- Ring Section -->
      <section class="bg-[#DFE8F5] w-full px-[20px] py-[40px] font-serif">
        <!-- Proposal Ring Section -->
        <div class="text-center font-medium px-[20px] [&>h1]:mb-7 mb-10">
          <h1>サイズやデザインでお悩みの方へ</h1>
          <span class="space-y-2">
            <p>パートナーのサイズやお好みのデザインが</p>
            <p>わからなくても</p>
            <p>あとから交換が可能なので</p>
            <p>ご安心いただけるサービス</p>
          </span>
        </div>
        <div class="proposal-ring bg-white px-[20px] py-[37px] flex flex-col items-center [&>h1]:text-3xl [&>h1]:font-medium">
          <h1 class="font-serif mb-6"><i>Proposal Ring</i></h1>
          <div class="mb-8 text-center space-y-2">
            <p>本物の婚約指輪でプロポーズ</p>
            <p>プロポーズ後にサイズやデザインを交換</p>
          </div>
          <img v-if="isMobile()" src="../assets/img_proposalring_sp/img_proposalring_sp.png" alt="proposal ring" />
          <img v-else src="../assets/img_proposalring_sp/img_proposalring_sp@2x.png" alt="proposal ring" />
          <div class="px-4 space-y-[14px] mt-8">
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>1</i>
                <p>店頭にてソリティア（１石）の婚約指輪とダイヤモンドをお選びください</p>
              </span>
            </div>
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>2</i>
                <p>ご成約いただいた１の婚約指輪でプロポーズ</p>
              </span>
            </div>
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>3</i>
                <p>後日、ご希望のサイズやデザインの婚約指輪に交換いたします</p>
              </span>
            </div>
          </div>
          <ToList />
        </div>
        <br />
        <!-- One Diamond Section -->
        <div class="proposal-ring bg-white px-[20px] py-[37px] flex flex-col items-center [&>h1]:text-3xl [&>h1]:font-medium">
          <h1 class="font-serif mb-6"><i>One Diamond</i></h1>
          <div class="mb-8 text-center space-y-2">
            <p>ダイヤモンドでプロポーズ</p>
            <p>プロポーズ後に婚約指輪にセッティング</p>
          </div>
          <img v-if="isMobile()" src="../assets/img_onediamond_sp/img_onediamond_sp.png" alt="proposal ring" />
          <img v-else src="../assets/img_onediamond_sp/img_onediamond_sp@2x.png" alt="proposal ring" />
          <div class="px-4 space-y-[14px] mt-8">
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>1</i>
                <p>店頭にてダイヤモンドをお選びください</p>
              </span>
            </div>
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>2</i>
                <p>ご成約いただいたダイヤモンドでプロポーズ</p>
              </span>
            </div>
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>3</i>
                <p>後日、ご希望のサイズやデザインの婚約指輪に仕上げていきます</p>
              </span>
            </div>
          </div>
          <div id="opacity-gradient" class="text-[#002257] font-yumincho mt-8 h-[310px] [&>span>h1]:text-xl w-full">
            <span class="text-center space-y-1 [&>h2]:text-l">
              <h1>Diamond Quality</h1>
              <h2>ダイヤモンドの4C</h2>
            </span>
            <div class="p-[10px] mt-[10px] border border-1 border-b-0 border-[#D8DFE5] w-full">
              <div class="flex space-x-6">
                <div class="flex flex-col justify-between font-JP w-full">
                  <span class="space-y-1">
                    <h1 class="font-semibold font-sans">CARAT</h1>
                    <p>重さ</p>
                  </span>
                  <div class="w-full flex flex-col w-[84px] text-[12px]">
                    <div class="flex items-center space-x-2 mb-2">
                      <div class="border border-1 border-[#D8DFE5] bg-[#F5F8FF] w-[50px] h-5"></div>
                      <p class="text-lg">=</p>
                    </div>
                    <span>
                      <p>4°Cブライダル 専門店取り扱い</p>
                    </span>
                  </div>
                </div>
                <p class="text-sm">
                  宝石の重さの単位で、1カラットは0.2グラム。カラット数が大きい程、希少価値は高まりますが、大きさだけではなく総合的な品質評価によりダイヤモンドの価格が決まります。４℃ブライダル専門店では、一部の店舗を除く全ての店舗で、下記のカラットをお取り扱いしています。
                </p>
              </div>
            </div>
            <!-- No 'Opacity gradient' image assets on adobeXd but Required in the UI -->
          </div>
          <button class="flex space-x-1 items-center z-10 border border-1 border-[#879AB7] text-[#002257] font-bold px-10 py-3 rounded-sm">
            <img src="../assets/arrow.png" alt="arrow icon" width="30px" class="rotate-180" />
            <p>ダイヤモンドの4Cをみる</p>
          </button>
          <div class="w-full mt-8 space-y-[20px]">
            <img class="w-full" src="../assets/bn_diamond_sp/bn_diamond_sp@2x.png" alt="diamond" />
            <img class="w-full" src="../assets/bn_idealcut_sp/bn_idealcut_sp@2x.png" alt="diamond" />
          </div>
          <ToList />
        </div>
        <!-- お急ぎの方へ Section -->
        <section
          class="proposal-ring bg-white px-[20px] py-[37px] flex flex-col items-center [&>h1]:text-3xl [&>h1]:font-mediu mt-[20px] font-serif"
        >
          <h1 class="font-serif mb-6"><i>お急ぎの方へ</i></h1>
          <div class="mb-8 text-center space-y-2">
            <p>ご成約の婚約指輪でプロポーズ</p>
            <p>当日お持ち帰りいただける婚約指輪</p>
          </div>
          <img v-if="isMobile()" src="../assets/img_oisogi_sp/img_oisogi_sp@2x.png" alt="proposal ring" />
          <img v-else src="../assets/img_oisogi_sp/img_oisogi_sp@2x.png" alt="proposal ring" />
          <div class="px-6 space-y-[14px] mt-8">
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>1</i>
                <p>店頭にてお好みの婚約指輪をお選びください</p>
              </span>
            </div>
            <div class="[&>span>i]:font-serif [&>span>p]:font-light [&>span>i]:font-medium [&>span>i]:text-3xl">
              <span class="flex space-x-4 items-start">
                <i>2</i>
                <p>当日お持ち帰りいただいた婚約指輪でプロポーズ</p>
              </span>
            </div>
          </div>
          <ToList />
        </section>
      </section>
      <!-- Bridal advisor Section -->
      <section class="w-full bg-[#EAECF0] p-[20px] text-[#222222] flex flex-col items-center [&>div>p]:font-light mt-20 font-yumincho">
        <div class="text-center p-[20px] w-full mb-4">
          <h1 class="font-semibold mb-5">予算がわからない、決められない方へ</h1>
          <p>ブライダルアドバイザーがご希望をお伺いしながらリング選びをサポート。 男性おひとりでの事前相談も承っております。</p>
        </div>
        <div class="w-full px-[20px]">
          <img class="w-full" v-if="isMobile()" src="../assets/img_bridaladvise_sp/img_bridaladvise_sp.png" alt="" />
          <img class="w-full" v-else src="../assets/img_bridaladvise_sp/img_bridaladvise_sp@2x.png" alt="" />
        </div>
        <div class="w-full px-[20px] mt-10 pb-3">
          <p>
            ４℃ブライダルでは、男性おひとりでのご来店・プロポーズのご相談を承っております。ご予算についてや、サプライズプロポーズなど、事前にご相談されたい方もお気軽にご来店ください。
          </p>
          <p>
            また、ご自宅にいながら、銀座本店のブライダルアドバイザーがご来店時と変わらずご要望やご相談をお伺いし、生涯をともにするリング選びをお手伝いするオンラインカウンセリングもございます。
          </p>
        </div>
        <div class="mt-[20px] text-[#235AAC] font-serif">
          <p>ご予約いただくとお待たせせずに</p>
          <p>ゆっくりとご相談いただけます。</p>
        </div>
        <div class="flex justify-between items-center font-serif text-[#002257] w-4/5 max-w-[322px] mt-8 font-bold">
          <span class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>店舗検索へ</p>
          </span>
          <span>|</span>
          <span class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p>来店予約へ</p>
          </span>
        </div>
        <button class="bg-[#7993BA] text-white py-3 px-[23.5px] rounded-sm my-[40px] hover:bg-[#235AAC] font-serif">
          オンラインカウンセリングを予約する
        </button>
      </section>
      <!-- Pre-proposal preparation and ring purchase flow | プロポーズの前準備・リング購入の流れ Section -->
      <section class="mt-16 px-[20px] pb-[80px] flex flex-col items-center font-yumincho">
        <h1 class="font-semibold text-[20.4px] mb-6">プロポーズの前準備・リング購入の流れ</h1>
        <div class="px-5 mb-6">
          <Carousel
            :centerMode="true"
            :loop="true"
            :navigationEnabled="true"
            :touchDrag="true"
            :per-page="1"
            :mouse-drag="true"
            paginationPosition="bottom-overlay"
            navigationNextLabel="▶︎"
            navigationPrevLabel="◀︎"
          >
            <Slide>
              <img v-if="isMobile()" class="w-full" src="../assets/BRIDAL-212プロポーズLP2/img_propose_002@2x.png" alt="ring" />
              <img v-else class="w-full" src="../assets/BRIDAL-212プロポーズLP2/img_propose_002@2x.png" alt="ring" />
              <!-- <h1 class="w-full text-center absolute bottom-0 translate-y-5 z-20 font-serif text-4xl font-medium"><i>1</i></h1> -->
            </Slide>
            <Slide>
              <img v-if="isMobile()" class="w-full" src="../assets/img_oisogi_sp/img_oisogi_sp@2x.png" alt="ring" />
              <img v-else class="w-full" src="../assets/BRIDAL-212プロポーズLP2/bn_idealcut@2x.png" alt="ring" />
              <!-- <h1 class="w-full text-center absolute bottom-0 translate-y-5 z-20 font-serif text-4xl font-medium"><i>2</i></h1> -->
            </Slide>
          </Carousel>
        </div>
        <h1 class="w-full text-center font-serif text-5xl"><i>1</i></h1>
        <div class="text-center font-JP space-y-5 mt-6 mb-7">
          <span class="text-lg font-semibold">
            <p>お相手の方の好みに合わせて</p>
            <p>婚約指輪のデザインを選ぶ</p>
          </span>
          <p class="font-light">
            婚約指輪一覧のぺージにて様々なデザインの婚約指輪をご用意しております。素材やダイヤモンドの大きさなど、お相手の方の好みに合わせてお選びください。
          </p>
        </div>
        <ListButton />
        <span class="w-[70px] h-[1px] bg-[#DDDDDD] my-16"></span>
        <div
          class="w-full flex flex-col items-center lg:justify-center lg:flex-row lg:w-[1266px] space-y-6 text-sm lg:space-y-0 lg:space-x-5"
        >
          <div class="w-full max-w-[480px] h-40 flex space-x-5 border border-1 border-[#DDDDDD]">
            <div id="bridal-plan" class="flex-1 bg-cover bg-center"></div>
            <div class="flex-1 flex flex-col justify-between [&>h1]:font-medium py-5 pr-5">
              <h1 class="font-sans">BRIDAL PLAN</h1>
              <h1 class="font-sans">ブライダルサービス</h1>
              <p class="font-light font-JP">セミオーダーサービスで世界でたったひとつのブライダルリングを。</p>
            </div>
          </div>
          <div class="w-full max-w-[480px] h-40 flex space-x-5 border border-1 border-[#DDDDDD]">
            <div id="right-ring" class="flex-1 bg-cover bg-center"></div>
            <div class="flex-1 flex flex-col justify-between [&>h1]:font-medium py-5 pr-5 space-y-1">
              <h1 class="font-sans">HOW TO CHOOSE A RIGHT RING</h1>
              <h1 class="font-sans">ブライダルリングの選び方</h1>
              <p class="font-light font-JP">理想のリングに出会う</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ToList from '../components/ToList.vue'
import { Carousel, Slide } from 'vue-carousel'
import ListButton from '../components/ListButton.vue'

export default {
  components: {
    ToList,
    ListButton,
    Carousel,
    Slide
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
#opacity-gradient {
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
}
#right-ring {
  background-image: url('../assets/bn_specialtyshop/bn_specialtyshop.png') !important;
}
</style>
