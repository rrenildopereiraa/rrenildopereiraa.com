import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Renildo, Freelancer since 2019 👋🏽
      </h1>
      <p className="mb-4">
        I am pleased to meet you. At present, I am a web engineer with a focus on products, and I am responsible for leading the development at <span className='font-semibold text-[#d4418a]'><a href="https://yummacss.com">Yumma CSS</a>.</span>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
