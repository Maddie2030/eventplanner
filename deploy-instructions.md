# Deployment Instructions for AWS EC2

## Prerequisites
1. AWS Account with EC2 access
2. Docker installed on your local machine
3. SSH key pair for EC2 instance

## EC2 Instance Setup

1. Launch EC2 Instance:
   ```bash
   Instance Type: t2.micro (or larger based on needs)
   OS: Amazon Linux 2023
   Storage: 20GB gp3
   ```

2. Security Group Configuration:
   - Allow HTTP (80)
   - Allow HTTPS (443)
   - Allow SSH (22)

3. Connect to EC2 Instance:
   ```bash
   ssh -i your-key.pem ec2-user@your-instance-ip
   ```

4. Install Docker on EC2:
   ```bash
   sudo yum update -y
   sudo yum install docker -y
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ec2-user
   ```

## Application Deployment

1. Clone Repository:
   ```bash
   git clone <your-repo-url>
   cd evezy
   ```

2. Build Docker Image:
   ```bash
   docker build -t evezy-app .
   ```

3. Run Container:
   ```bash
   docker run -d -p 80:80 --name evezy evezy-app
   ```

## SSL Configuration (Optional)

1. Install Certbot:
   ```bash
   sudo yum install certbot python3-certbot-nginx -y
   ```

2. Obtain SSL Certificate:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Monitoring and Maintenance

1. Monitor Container:
   ```bash
   docker logs evezy
   docker stats evezy
   ```

2. Update Application:
   ```bash
   docker pull evezy-app:latest
   docker stop evezy
   docker rm evezy
   docker run -d -p 80:80 --name evezy evezy-app
   ```

3. Backup:
   ```bash
   docker commit evezy evezy-backup
   ```

## Security Best Practices

1. Keep EC2 instance updated:
   ```bash
   sudo yum update -y
   ```

2. Regular Docker updates:
   ```bash
   sudo yum update docker -y
   ```

3. Use AWS CloudWatch for monitoring
4. Enable AWS WAF for additional security
5. Regular security audits
6. Implement backup strategy

## Scaling (Future Considerations)

1. Use Elastic Load Balancer
2. Implement Auto Scaling Groups
3. Consider using AWS ECS/EKS for container orchestration
4. Use AWS RDS for database (when needed)