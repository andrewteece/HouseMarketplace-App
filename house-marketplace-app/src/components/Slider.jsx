import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, Ally } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, Ally])
