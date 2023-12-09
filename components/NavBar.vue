<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                :class="[
                  theme ? 'bg-dark-primary' : 'bg-white',
                  'flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 ring-1 ring-white/10',
                ]"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <h5 class="text-dark-secondary font-bold text-3xl">
                    Tool <span
                      :class="[theme ? 'text-white' : 'text-black']"
                      >Glide</span
                    >
                  </h5>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[
                              theme
                                ? 'text-white hover:bg-dark-light'
                                : 'text-dark-middle hover:text-black hover:bg-light-light',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 shrink-0 text-middle font-inter"
                              aria-hidden="true"
                              :theme="[theme ? '#ffffff' : '#330033']"
                            />
                            {{ item.name }}
                            <span
                              v-if="item.count"
                              class="ml-auto w-[25px] whitespace-nowrap rounded-md bg-red-500 px-1 py-1 text-center text-xs font-sans text-white"
                              aria-hidden="true"
                              >{{ item.count }}</span
                            >
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="mt-auto">
                      <a
                        @click="changeTheme"
                        href="#"
                        :class="[
                          theme
                            ? 'hover:bg-dark-light hover:text-white text-white'
                            : 'hover:bg-light-light hover:text-black text-dark-strong',
                          'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                        ]"
                      >
                        <Setting
                          class="h-6 w-6 shrink-0 text-middle font-inter"
                          aria-hidden="true"
                          :theme="[theme ? '#ffffff' : '#1A1220']"
                        />
                        Setting
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[248px] lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        :class="[
          theme ? 'bg-dark-primary' : 'bg-white',
          'flex grow flex-col gap-y-5 overflow-y-auto px-[16px] pb-[17px]',
        ]"
      >
        <div class="flex h-16 shrink-0 items-center">
          <h5 class="text-dark-secondary font-sans text-large font-semibold">
            Tool <span :class="[theme ? 'text-white' : 'text-black']"
              >Glide</span
            >
          </h5>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      theme
                        ? 'text-white hover:bg-dark-light'
                        : 'text-dark-middle hover:text-black hover:bg-light-light',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0 text-middle font-inter"
                      aria-hidden="true"
                      :theme="[theme ? '#ffffff' : '#330033']"
                    />
                    {{ item.name }}
                    <span
                      v-if="item.count"
                      class="ml-auto w-[25px] whitespace-nowrap rounded-md bg-red-500 px-1 py-1 text-center text-xs font-sans text-white"
                      aria-hidden="true"
                      >{{ item.count }}</span
                    >
                  </a>
                </li>
              </ul>

              <!-- <ul role="list" class="space-y-6" v-if="navigation.subNavs && navigation.subNavs.length">
                <li
                  v-for="(activityItem, activityItemIdx) in navigation"
                  :key="activityItem.id"
                  class="relative flex gap-x-4"
                >
                  <div
                    :class="[
                      activityItemIdx === activity.length - 1
                        ? 'h-6'
                        : '-bottom-6',
                      'absolute left-0 top-0 flex w-6 justify-center',
                    ]"
                  >
                    <div class="w-px bg-gray-200" />
                  </div>
                  <template v-else>
                    <div
                      class="relative flex h-6 w-6 flex-none items-center justify-center bg-white"
                    >
                      <CheckCircleIcon
                        v-if="activityItem.type === 'paid'"
                        class="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div
                        v-else
                        class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"
                      />
                    </div>
                    <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                      <span class="font-medium text-gray-900">{{
                        activityItem.person.name
                      }}</span>
                      {{ activityItem.type }} the invoice.
                    </p>
                    <time
                      :datetime="activityItem.dateTime"
                      class="flex-none py-0.5 text-xs leading-5 text-gray-500"
                      >{{ activityItem.date }}</time
                    >
                  </template>
                </li>
              </ul> -->
            </li>

            <li class="mt-auto">
              <a
                @click="changeTheme"
                href="#"
                :class="[
                  theme
                    ? 'hover:bg-dark-light hover:text-white text-white'
                    : 'hover:bg-light-light hover:text-black text-dark-strong',
                  'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                ]"
              >
                <Setting
                  class="h-6 w-6 shrink-0 font-inter text-middle"
                  aria-hidden="true"
                  :theme="[theme ? '#FFFFFF' : '#1A1220']"
                />
                Setting
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="">
      <div
        :class="[
          theme ? 'bg-dark-primary' : 'bg-white',
          'sticky top-0 z-40 flex h-[80px] shrink-0 items-center gap-x-4 px-4 shadow-sm  sm:px-6 lg:px-[24px]',
        ]"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch  justify-end">
          <div class="flex items-center gap-x-4 ">
            <button
              type="button"
              :class="[theme ?'border-dark-light bg-dark-strong':'border-outline-light', '-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 border-2 rounded-md']"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon
                :class="[
                  theme
                    ? 'bg-dark-strong text-white'
                    : 'bg-white, text-dark-strong',
                  'h-4 w-4 font-white ',
                ]"
                aria-hidden="true"
              />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="ml-[18px] flex items-center">
                <span class="sr-only">Open user menu</span>
                <img
                  :class="[theme ? 'border-dark-light' :'border-white','h-12 w-12 rounded-full bg-gray-50 border-2 ']"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div
                  :class="[
                    theme ? 'bg-dark-icon' : 'bg-light-icon',
                    'h-[20px] w-[20px] rounded-md  flex ml-[14px] items-center justify-center ',
                  ]"
                  alt=""
                >
                  <DownIcon :theme="[theme ? '#1A1220' : '#6B6B6B']" />
                </div>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main
        :class="[
          theme ? 'bg-dark-strong' : 'bg-light-strong',
          'h-screen text-black',
        ]"
      >
        <div class="w-full h-full">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import Dashboard from "@/components/Icons/Dashboard.vue";
import Discover from "@/components/Icons/Discover.vue";
import Tool from "@/components/Icons/Tool.vue";
import Support from "@/components/Icons/Support.vue";
import Resources from "@/components/Icons/Resources.vue";
import Tips from "@/components/Icons/Tips.vue";
import Setting from "@/components/Icons/Setting.vue";
import DownIcon from "@/components/Icons/Down";



import {
  Bars3Icon,
  BellIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

import { useFiltersStore } from '~/store/filters'
import { storeToRefs } from 'pinia'

const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)





const navigation = [
  { name: "Dashboard", href: "#", icon: Dashboard, current: true },
  { name: "Discover", href: "#", icon: Discover, current: false },
  {
    name: "Tool",
    href: "#",
    icon: Tool,
    current: false,
    subNavs: [
      { name: "E-mail Timer", href: "#" },
      { name: "Notification Bell", href: "#" },
      { name: "EVideo Pop", href: "#" },
    ],
  },
  { name: "Support", href: "#", icon: Support, current: false },
  { name: "Resources", href: "#", icon: Resources, current: false, count: 5 },
  { name: "Tips & Tricks", href: "#", icon: Tips, current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
</script>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      theme: true,
      stateValue : ''
    };
  },

  methods: {
    changeTheme() {
      console.log("aaa");
      this.theme = !this.theme;
    },

    shouldShowItem(item) {
      // You can set your own condition here.
      // For example, only show available items.
      return item.available;
    },
  },
  mounted() {
    console.log('this is componentdid mounted function', this.$store);
  }
};
</script>
