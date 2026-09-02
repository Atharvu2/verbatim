import { sanityFetch } from './live'
import {
  CATEGORIES_QUERY,
  COURSE_BY_SLUG_QUERY,
  COURSES_QUERY,
  INSTRUCTOR_BY_SLUG_QUERY,
  INSTRUCTORS_QUERY,
  LESSON_BY_SLUG_QUERY,
  LESSONS_QUERY,
} from './queries'

export async function getCourses() {
  const { data } = await sanityFetch({ query: COURSES_QUERY })
  return data
}

export async function getCourseBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: COURSE_BY_SLUG_QUERY,
    params: { slug },
  })
  return data
}

export async function getLessons() {
  const { data } = await sanityFetch({ query: LESSONS_QUERY })
  return data
}

export async function getLessonBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: LESSON_BY_SLUG_QUERY,
    params: { slug },
  })
  return data
}

export async function getInstructors() {
  const { data } = await sanityFetch({ query: INSTRUCTORS_QUERY })
  return data
}

export async function getInstructorBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: INSTRUCTOR_BY_SLUG_QUERY,
    params: { slug },
  })
  return data
}

export async function getCategories() {
  const { data } = await sanityFetch({ query: CATEGORIES_QUERY })
  return data
}
