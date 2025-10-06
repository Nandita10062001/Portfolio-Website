import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime
import base64
from pathlib import Path

# Page configuration
st.set_page_config(
    page_title="AI & ML Engineer Portfolio",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    .sub-header {
        font-size: 1.5rem;
        color: #6b7280;
        margin-bottom: 2rem;
    }
    .section-header {
        font-size: 2rem;
        font-weight: 600;
        color: #1f2937;
        margin: 2rem 0 1rem 0;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.5rem;
    }
    .contact-info {
        background-color: #f9fafb;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #3b82f6;
    }
    .project-card {
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 1rem;
        border-left: 4px solid #10b981;
    }
    .publication-item {
        background-color: #f8fafc;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border-left: 3px solid #8b5cf6;
    }
    .skill-tag {
        background-color: #dbeafe;
        color: #1e40af;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
        margin: 0.25rem;
        display: inline-block;
    }
    .metric-card {
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
        border-top: 4px solid #3b82f6;
    }
</style>
""", unsafe_allow_html=True)

# Sidebar navigation
st.sidebar.title("🧠 AI & ML Portfolio")
st.sidebar.markdown("---")

# Navigation
page = st.sidebar.selectbox(
    "Navigate",
    ["About", "Education", "Experience", "Projects", "Publications", "Skills", "Contact"]
)

# Data for the portfolio
@st.cache_data
def load_portfolio_data():
    return {
        "name": "[Your Name]",
        "title": "AI & Machine Learning Engineer",
        "university": "Graduate Student at [Target University]",
        "email": "your.email@example.com",
        "linkedin": "https://linkedin.com/in/yourprofile",
        "github": "https://github.com/yourusername",
        "location": "Your City, Country",
        "phone": "+1 (555) 123-4567"
    }

# Load data
data = load_portfolio_data()

# About Page
if page == "About":
    st.markdown(f'<h1 class="main-header">{data["name"]}</h1>', unsafe_allow_html=True)
    st.markdown(f'<h2 class="sub-header">{data["title"]}</h2>', unsafe_allow_html=True)
    st.markdown(f'<p style="font-size: 1.2rem; color: #6b7280;">{data["university"]}</p>', unsafe_allow_html=True)
    
    # Contact info in a nice card
    st.markdown("""
    <div class="contact-info">
        <h3 style="margin-top: 0; color: #1f2937;">Contact Information</h3>
        <p><strong>📧 Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
        <p><strong>💻 GitHub:</strong> <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
        <p><strong>📍 Location:</strong> Your City, Country</p>
        <p><strong>📱 Phone:</strong> +1 (555) 123-4567</p>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("---")
    
    # About text
    st.markdown("""
    ## About Me
    
    I am a passionate AI & Machine Learning Engineer with a strong foundation in computer science and a drive to develop intelligent systems that solve real-world problems. My journey in AI began during my undergraduate studies, where I discovered the fascinating world of machine learning and artificial intelligence.
    
    I have hands-on experience with deep learning frameworks, computer vision, natural language processing, and building scalable ML systems. My goal is to pursue advanced studies in Computer Science at prestigious universities to further my research in AI.
    
    ### Research Interests
    - **Deep Learning**: Neural network architectures and optimization
    - **Computer Vision**: Image recognition and medical imaging
    - **Natural Language Processing**: Language models and text analysis
    - **ML Systems**: Production deployment and scalability
    """)
    
    # Key metrics
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.markdown("""
        <div class="metric-card">
            <h2 style="color: #3b82f6; margin: 0;">5+</h2>
            <p style="margin: 0.5rem 0 0 0; color: #6b7280;">ML Projects</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="metric-card">
            <h2 style="color: #10b981; margin: 0;">3+</h2>
            <p style="margin: 0.5rem 0 0 0; color: #6b7280;">Research Papers</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="metric-card">
            <h2 style="color: #f59e0b; margin: 0;">2+</h2>
            <p style="margin: 0.5rem 0 0 0; color: #6b7280;">Years Experience</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col4:
        st.markdown("""
        <div class="metric-card">
            <h2 style="color: #8b5cf6; margin: 0;">95%</h2>
            <p style="margin: 0.5rem 0 0 0; color: #6b7280;">Model Accuracy</p>
        </div>
        """, unsafe_allow_html=True)

# Education Page
elif page == "Education":
    st.markdown('<h1 class="section-header">Education</h1>', unsafe_allow_html=True)
    
    # Current Education
    st.markdown("""
    <div class="project-card">
        <h3 style="color: #1f2937; margin-top: 0;">🎓 Master of Science in Computer Science</h3>
        <p><strong>Institution:</strong> [Target University] - [Year]</p>
        <p><strong>Status:</strong> <span style="color: #10b981; font-weight: 600;">Expected</span></p>
        <p><strong>Focus:</strong> Artificial Intelligence, Machine Learning, Deep Learning</p>
    </div>
    """, unsafe_allow_html=True)
    
    # Undergraduate Education
    st.markdown("""
    <div class="project-card">
        <h3 style="color: #1f2937; margin-top: 0;">🎓 Bachelor of Technology in Computer Science</h3>
        <p><strong>Institution:</strong> [Your University Name]</p>
        <p><strong>Duration:</strong> 2020 - 2024</p>
        <p><strong>GPA:</strong> 3.8/4.0</p>
        <p><strong>Honors:</strong> Dean's List for 3 consecutive semesters</p>
    </div>
    """, unsafe_allow_html=True)
    
    # Relevant Coursework
    st.markdown("### 📚 Relevant Coursework")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
        **Core CS Courses:**
        - Data Structures and Algorithms
        - Operating Systems
        - Database Systems
        - Software Engineering
        - Computer Networks
        """)
    
    with col2:
        st.markdown("""
        **AI/ML Specialization:**
        - Machine Learning
        - Deep Learning
        - Computer Vision
        - Natural Language Processing
        - Statistics and Probability
        - Neural Networks
        """)
    
    # Achievements
    st.markdown("### 🏆 Academic Achievements")
    
    achievements = [
        "Dean's List for 3 consecutive semesters",
        "Final Year Project: 'Advanced Neural Networks for Image Recognition'",
        "Published 2 research papers in international conferences",
        "1st Place - National AI Hackathon 2023",
        "Best Research Paper - International ML Conference",
        "Outstanding Student - Computer Science Department"
    ]
    
    for achievement in achievements:
        st.markdown(f"✅ {achievement}")

# Experience Page
elif page == "Experience":
    st.markdown('<h1 class="section-header">Professional Experience</h1>', unsafe_allow_html=True)
    
    # Experience timeline
    experiences = [
        {
            "title": "Research Intern",
            "company": "[Company/University Name]",
            "duration": "Summer 2023",
            "description": "Conducted research on deep learning architectures for computer vision tasks",
            "responsibilities": [
                "Implemented and evaluated novel neural network models using PyTorch",
                "Collaborated with PhD students and faculty on research publications",
                "Analyzed large datasets and developed preprocessing pipelines",
                "Presented findings at weekly research meetings"
            ]
        },
        {
            "title": "Machine Learning Engineer Intern",
            "company": "[Company Name]",
            "duration": "Summer 2022",
            "description": "Developed ML models for predictive analytics and business intelligence",
            "responsibilities": [
                "Built end-to-end ML pipelines using Python, scikit-learn, and TensorFlow",
                "Deployed models to production using Docker and cloud platforms",
                "Collaborated with data scientists and software engineers",
                "Improved model accuracy by 15% through feature engineering"
            ]
        },
        {
            "title": "Software Developer Intern",
            "company": "[Tech Company]",
            "duration": "Summer 2021",
            "description": "Developed web applications and data processing tools",
            "responsibilities": [
                "Built RESTful APIs using Python and Flask",
                "Implemented data visualization dashboards",
                "Worked with SQL databases and data processing",
                "Participated in agile development processes"
            ]
        }
    ]
    
    for exp in experiences:
        st.markdown(f"""
        <div class="project-card">
            <h3 style="color: #1f2937; margin-top: 0;">💼 {exp['title']}</h3>
            <p><strong>Company:</strong> {exp['company']}</p>
            <p><strong>Duration:</strong> {exp['duration']}</p>
            <p><strong>Description:</strong> {exp['description']}</p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
        """, unsafe_allow_html=True)
        
        for resp in exp['responsibilities']:
            st.markdown(f"<li>{resp}</li>", unsafe_allow_html=True)
        
        st.markdown("</ul></div>", unsafe_allow_html=True)

# Projects Page
elif page == "Projects":
    st.markdown('<h1 class="section-header">Featured Projects</h1>', unsafe_allow_html=True)
    
    # Interactive project selector
    project_type = st.selectbox("Filter by Project Type", ["All", "Deep Learning", "NLP", "Computer Vision", "Data Science"])
    
    projects = [
        {
            "title": "Deep Learning Model for Medical Diagnosis",
            "type": "Deep Learning",
            "tech": "Python, TensorFlow, OpenCV, AWS",
            "description": "Developed a CNN-based model for automated medical image analysis with 94% accuracy. Implemented using TensorFlow and deployed on AWS with real-time inference capabilities.",
            "github": "https://github.com/yourusername/medical-ai",
            "demo": "https://demo-link.com",
            "metrics": {"accuracy": 94, "users": 1000, "processing_time": 0.5}
        },
        {
            "title": "NLP Chatbot for Customer Service",
            "type": "NLP",
            "tech": "Python, Transformers, Flask, PostgreSQL",
            "description": "Built an intelligent chatbot using transformer models for customer support. Achieved 89% customer satisfaction with natural language understanding and context awareness.",
            "github": "https://github.com/yourusername/nlp-chatbot",
            "demo": "https://demo-link.com",
            "metrics": {"satisfaction": 89, "response_time": 2.1, "languages": 3}
        },
        {
            "title": "Predictive Analytics Platform",
            "type": "Data Science",
            "tech": "Python, Scikit-learn, Docker, Kubernetes",
            "description": "Created a comprehensive ML platform for business intelligence with real-time data processing and predictive modeling capabilities. Served 1000+ daily users.",
            "github": "https://github.com/yourusername/analytics-platform",
            "demo": "https://demo-link.com",
            "metrics": {"users": 1000, "accuracy": 87, "uptime": 99.9}
        },
        {
            "title": "Real-time Object Detection System",
            "type": "Computer Vision",
            "tech": "Python, YOLO, OpenCV, TensorRT",
            "description": "Developed a real-time object detection system using YOLO architecture optimized for edge devices. Achieved 30 FPS on NVIDIA Jetson Nano.",
            "github": "https://github.com/yourusername/object-detection",
            "demo": "https://demo-link.com",
            "metrics": {"fps": 30, "accuracy": 92, "latency": 33}
        }
    ]
    
    # Filter projects
    filtered_projects = [p for p in projects if project_type == "All" or p["type"] == project_type]
    
    for project in filtered_projects:
        st.markdown(f"""
        <div class="project-card">
            <h3 style="color: #1f2937; margin-top: 0;">🚀 {project['title']}</h3>
            <p><strong>Type:</strong> {project['type']}</p>
            <p><strong>Technologies:</strong> {project['tech']}</p>
            <p><strong>Description:</strong> {project['description']}</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Project metrics
        col1, col2, col3 = st.columns(3)
        metrics = project['metrics']
        
        with col1:
            st.metric("Accuracy", f"{list(metrics.values())[0]}%")
        with col2:
            st.metric("Users/Performance", f"{list(metrics.values())[1]}")
        with col3:
            st.metric("Speed/Time", f"{list(metrics.values())[2]}")
        
        # Project links
        col1, col2 = st.columns(2)
        with col1:
            st.markdown(f"[🔗 GitHub Repository]({project['github']})")
        with col2:
            st.markdown(f"[🎯 Live Demo]({project['demo']})")
        
        st.markdown("---")

# Publications Page
elif page == "Publications":
    st.markdown('<h1 class="section-header">Research Publications</h1>', unsafe_allow_html=True)
    
    publications = [
        {
            "title": "Advanced Neural Networks for Image Recognition in Medical Applications",
            "authors": "[Your Name], [Co-author], [Advisor]",
            "venue": "International Conference on Machine Learning (ICML) 2024",
            "status": "Under Review",
            "abstract": "This paper presents a novel deep learning architecture for medical image analysis, achieving state-of-the-art performance on multiple medical imaging datasets.",
            "citations": 0
        },
        {
            "title": "Efficient Deep Learning Architectures for Real-time Computer Vision",
            "authors": "[Your Name], [Co-author], [Advisor]",
            "venue": "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2023",
            "status": "Published",
            "abstract": "We propose an efficient neural network architecture that achieves high accuracy while maintaining real-time performance on resource-constrained devices.",
            "citations": 15
        },
        {
            "title": "Multi-modal Learning for Enhanced Natural Language Understanding",
            "authors": "[Your Name], [Co-author], [Advisor]",
            "venue": "Association for Computational Linguistics (ACL) 2023",
            "status": "Published",
            "abstract": "This work introduces a novel approach to combining text and visual information for improved language understanding tasks.",
            "citations": 8
        }
    ]
    
    for pub in publications:
        status_color = "#10b981" if pub["status"] == "Published" else "#f59e0b"
        
        st.markdown(f"""
        <div class="publication-item">
            <h3 style="color: #1f2937; margin-top: 0;">📄 {pub['title']}</h3>
            <p><strong>Authors:</strong> {pub['authors']}</p>
            <p><strong>Venue:</strong> {pub['venue']}</p>
            <p><strong>Status:</strong> <span style="color: {status_color}; font-weight: 600;">{pub['status']}</span></p>
            <p><strong>Citations:</strong> {pub['citations']}</p>
            <p><strong>Abstract:</strong> {pub['abstract']}</p>
        </div>
        """, unsafe_allow_html=True)

# Skills Page
elif page == "Skills":
    st.markdown('<h1 class="section-header">Technical Skills</h1>', unsafe_allow_html=True)
    
    # Programming Languages
    st.markdown("### 💻 Programming Languages")
    languages = ["Python", "R", "Java", "JavaScript", "C++", "SQL", "MATLAB"]
    lang_cols = st.columns(len(languages))
    for i, lang in enumerate(languages):
        with lang_cols[i]:
            st.markdown(f'<span class="skill-tag">{lang}</span>', unsafe_allow_html=True)
    
    st.markdown("---")
    
    # ML/AI Frameworks
    st.markdown("### 🧠 ML/AI Frameworks & Libraries")
    frameworks = ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK", "SpaCy", "Hugging Face"]
    framework_cols = st.columns(len(frameworks))
    for i, framework in enumerate(frameworks):
        with framework_cols[i]:
            st.markdown(f'<span class="skill-tag">{framework}</span>', unsafe_allow_html=True)
    
    st.markdown("---")
    
    # Tools & Technologies
    st.markdown("### 🛠️ Tools & Technologies")
    tools = ["Docker", "Kubernetes", "AWS", "Git", "Jupyter", "Tableau", "Power BI", "Linux"]
    tool_cols = st.columns(len(tools))
    for i, tool in enumerate(tools):
        with tool_cols[i]:
            st.markdown(f'<span class="skill-tag">{tool}</span>', unsafe_allow_html=True)
    
    st.markdown("---")
    
    # Skills visualization
    st.markdown("### 📊 Skills Proficiency")
    
    skills_data = {
        "Skill": ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Analysis", "Cloud Computing", "Statistics"],
        "Proficiency": [95, 90, 85, 88, 82, 90, 75, 85]
    }
    
    df_skills = pd.DataFrame(skills_data)
    
    fig = px.bar(df_skills, x="Skill", y="Proficiency", 
                 title="Technical Skills Proficiency",
                 color="Proficiency",
                 color_continuous_scale="Viridis")
    
    fig.update_layout(
        xaxis_title="Skills",
        yaxis_title="Proficiency (%)",
        height=400
    )
    
    st.plotly_chart(fig, use_container_width=True)

# Contact Page
elif page == "Contact":
    st.markdown('<h1 class="section-header">Get In Touch</h1>', unsafe_allow_html=True)
    
    st.markdown("""
    Feel free to reach out if you'd like to discuss research opportunities, collaborations, or just chat about AI and machine learning!
    """)
    
    # Contact form
    st.markdown("### 📧 Send me a message")
    
    with st.form("contact_form"):
        name = st.text_input("Your Name")
        email = st.text_input("Your Email")
        subject = st.text_input("Subject")
        message = st.text_area("Message", height=150)
        
        submitted = st.form_submit_button("Send Message")
        
        if submitted:
            if name and email and subject and message:
                st.success("Thank you for your message! I'll get back to you soon.")
            else:
                st.error("Please fill in all fields.")
    
    # Contact information
    st.markdown("### 📞 Contact Information")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
        **📧 Email:** [your.email@example.com](mailto:your.email@example.com)
        
        **💼 LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
        
        **📍 Location:** Your City, Country
        """)
    
    with col2:
        st.markdown("""
        **💻 GitHub:** [github.com/yourusername](https://github.com/yourusername)
        
        **📱 Phone:** +1 (555) 123-4567
        
        **🌐 Website:** [yourwebsite.com](https://yourwebsite.com)
        """)
    
    # Social links
    st.markdown("### 🔗 Connect with me")
    
    social_cols = st.columns(4)
    with social_cols[0]:
        st.markdown("[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)")
    with social_cols[1]:
        st.markdown("[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)")
    with social_cols[2]:
        st.markdown("[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)")
    with social_cols[3]:
        st.markdown("[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)")

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #6b7280; padding: 2rem 0;">
    <p>&copy; 2024 [Your Name]. All rights reserved. | Built with ❤️ using Streamlit</p>
</div>
""", unsafe_allow_html=True)
