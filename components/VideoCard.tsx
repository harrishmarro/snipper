import React ,{useState,useEffect,useRef} from 'react'
import { Video } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import {HiVolumeUp,HiVolumeOff} from 'react-icons/hi'
import {BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'
import {NextPage}  from 'next'

interface IProps{
    post:Video;
}

export const VideoCard: NextPage<IProps> = ({post}) => {
    const [isHover,setisHover]= useState(false)
    const [playing,setplaying]= useState(false)
    const [isVideoMuted,setisVideoMuted]= useState(false)
    const videoRef =useRef<HTMLVideoElement>(null);
    const onVideoPres =()=>
    {
        if(playing){
            videoRef?.current?.pause();
            setplaying(false);
        }else{
            videoRef?.current?.play();
            setplaying(true);
        }
    }
    

  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
        <div>
            <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
                <div className='md:-16 md:h-16 w-10 h-10'>
                    <Link href="/">
                        <>
                        <Image width={62}
                        height={62}
                        className="rounded-full"
                        src={post.postedBy.image}
                        alt="profile photo"
                        layout="responsive"/>
                        </>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <div className='flex item-center gap-2'>
                            <p className='flex gap-2 items-center md:text-md font-bold text-primary'>{post.postedBy.userName}{''}
                                <GoVerified
                                className='text-blue-400 text-md'/>
                            </p>
                            <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>{post.postedBy.userName}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='lg:ml-20 flex gap-4 relative'>
            <div 
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            className='rounded-3xl'>
                <Link href={`/detail/${post._id}`}>
                    <video src={post.video.asset.url} loop className="lg:w-[700px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100" ref={videoRef} />
                    
                </Link>
                {
                    isHover && (
                        <div>
                            {playing ? (
                                <button className='text-black text-2xl lg:text-4xl absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3' onClick={onVideoPres}>
                                <BsFillPauseFill/>
                                </button>
                            ):(
                                <button className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3 text-black text-2xl lg:text-4xl' onClick={onVideoPres}>
                                    <BsFillPlayFill/>
                                </button>
                            )}
                            {isVideoMuted ? (
                                <button className='absolute bottom-6 cursor-pointer right-8 md:right-14 lg:right-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3 text-black text-2xl lg:text-4xl' onClick={()=> setisVideoMuted(false)}>
                                <HiVolumeOff/>
                                </button>
                            ):(
                                <button className='absolute bottom-6 cursor-pointer right-8 md:right-14 lg:right-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3 text-black text-2xl lg:text-4xl' onClick={()=>setisVideoMuted(true)}>
                                    <HiVolumeUp/>
                                </button>
                            )}

                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
