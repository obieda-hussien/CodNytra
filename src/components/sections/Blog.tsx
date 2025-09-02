// src/components/sections/Blog.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FadeIn from '../animations/FadeIn';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { blogPosts, blogCategories, BlogPost } from '../../constants/blog';

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('جميع المقالات');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    if (selectedCategory === 'جميع المقالات') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
    setVisiblePosts(3); // Reset visible posts when category changes
  }, [selectedCategory]);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4"
            >
              مدونتنا التقنية
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              اكتشف أحدث المقالات والرؤى في عالم التقنية، نصائح البرمجة، واتجاهات التطوير
              من خبراء فريق Codenetra.
            </motion.p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {blogCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full relative overflow-hidden" hover={false}>
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                      مميز
                    </span>
                  </div>
                )}

                {/* Article Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary/30">
                    {post.title.charAt(0)}
                  </div>
                </div>

                {/* Article Content */}
                <div className="space-y-4">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                        <span>{post.readTime} دقائق</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 dark:text-gray-400">
                      <FontAwesomeIcon icon={faUser} className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="pt-4"
                  >
                    <button className="flex items-center space-x-2 space-x-reverse text-primary hover:text-primary-dark font-medium transition-colors duration-200 group">
                      <span>اقرأ المزيد</span>
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <FadeIn delay={0.8}>
            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={loadMorePosts}
                className="min-w-[200px]"
              >
                تحميل المزيد من المقالات
              </Button>
            </div>
          </FadeIn>
        )}

        {/* Newsletter Subscription */}
        <FadeIn delay={1.0}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <Card className="text-center bg-gradient-to-r from-primary to-primary-dark text-white">
              <h3 className="text-2xl font-bold mb-4">
                اشترك في نشرتنا الإخبارية
              </h3>
              <p className="text-primary-light mb-6 max-w-2xl mx-auto">
                احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 border-white"
                >
                  اشتراك
                </Button>
              </div>
            </Card>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}