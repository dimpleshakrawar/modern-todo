import { Icons } from '@/app/icons/Icons';
import { IconType } from 'react-icons';

interface ISidebar {
     id: number;
     lable: string;
     icon: IconType;
     onclick: {};
}

export default function Sidebar() {
     const sidebarMenus = [
          { id: 1, lable: 'Search', icon: Icons.search, onclick: {} },
          { id: 2, lable: 'Inbox', icon: Icons.inbox, onclick: {} },
          { id: 3, lable: 'Today', icon: Icons.calender, onclick: {} },
          { id: 4, lable: 'Upcoming', icon: Icons.upcoming, onclick: {} },
          { id: 5, lable: 'Filters & Labels', icon: Icons.filter, onclick: {} }
     ];
     return (
          <div className="bg-black h-full w-[20%] bg-primaryDarkBg p-2">
               <div className="mb-5">
                    {/* profiile section */}
                    <div className="flex justify-between gap-2">
                         <div className="flex gap-2 items-center">
                              {/* <Image src={""} alt="" height="" width=""/> */}
                              <p className="rounded-full w-10 h-10 bg-primaryHover" />
                              <p className="font-semibold">Dimple</p>
                         </div>
                         <div className="flex gap-4 justify-between items-center">
                              <button>
                                   <Icons.notification
                                        color="grey"
                                        fontSize={20}
                                   />
                              </button>
                              <button>
                                   <Icons.sidebar color="black" fontSize={20} />
                              </button>
                         </div>
                    </div>
               </div>

               {/* add new task section */}
               <div className="flex gap-2 items-center px-1.5 mb-5">
                    <button>
                         <Icons.fillAdd color={'brown'} fontSize={30} />
                    </button>
                    <p className="font-medium">Add Task</p>
               </div>

               {/* sidebar menus */}
               <ul>
                    {sidebarMenus?.map((data: ISidebar) => (
                         <li
                              key={data.id}
                              className={`hover:bg-primaryHover flex items-center gap-2 py-2 px-2 cursor-pointer mb-2 rounded-md`}
                         >
                              <button>
                                   <data.icon fontSize={20} />
                              </button>
                              <p className="font-medium">{data.lable}</p>
                         </li>
                    ))}
               </ul>
          </div>
     );
}
